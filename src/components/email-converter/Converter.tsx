"use client"
import { useState } from "react";
import { Code2, ArrowRight, Copy, Download, Upload, Zap, Mail, Settings } from "lucide-react";

export default function Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [format, setFormat] = useState("hubspot");
  const [type, setType] = useState("mjml");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = process.env.NEXT_PUBLIC_EMAIL_CONVERTER_URL

  const handleConvert = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: input, format, type }),
      });

      const data = await res.json();
      setOutput(data.result || data.error);
    } catch (error) {
      setOutput("Error: Unable to connect to conversion service");
    }
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadOutput = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted-email-${format}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatOptions = [
    { value: "hubspot", label: "HubSpot", icon: "🎯" },
    { value: "mailchimp", label: "Mailchimp", icon: "🐵" },
    { value: "klaviyo", label: "Klaviyo", icon: "📧" }
  ];

  const typeOptions = [
    { value: "mjml", label: "MJML", icon: "📝" },
    { value: "react-email", label: "React Email", icon: "⚛️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Code Converter
              </h1>
              <p className="text-sm text-gray-600">Transform MJML & React Email to platform-specific formats</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Control Panel */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-gray-600" />
            <h2 className="font-semibold text-gray-800">Conversion Settings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Input Type</label>
              <div className="grid grid-cols-2 gap-2">
                {typeOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      type === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setType(option.value)}
                  >
                    <div className="text-lg mb-1">{option.icon}</div>
                    <div className="text-sm font-medium">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Output Platform</label>
              <div className="grid grid-cols-3 gap-2">
                {formatOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      format === option.value
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setFormat(option.value)}
                  >
                    <div className="text-lg mb-1">{option.icon}</div>
                    <div className="text-xs font-medium">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <button
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isLoading || !input.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                }`}
                onClick={handleConvert}
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
                    Converting...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    Convert
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-800">Input Code</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setInput("")}
                    title="Clear input"
                  >
                    <Upload className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-96 relative">
              <textarea
                className="w-full h-full p-4 bg-white/50 border-0 resize-none focus:outline-none focus:bg-white/70 font-mono text-sm leading-relaxed text-gray-800 placeholder-gray-500"
                placeholder={`Paste your ${type === 'mjml' ? 'MJML' : 'React Email'} code here...

Example - Order Confirmation Email:
${type === 'mjml' ? 
`<mjml>
  <mj-body>
    <mj-section background-color="#f8f9fa" padding="20px 0">
      <mj-column>
        <mj-text align="center" font-size="24px" font-weight="bold" color="#2c3e50">
          Order Confirmed! 🎉
        </mj-text>
        <mj-text align="center" color="#7f8c8d">
          Thanks for your purchase, John!
        </mj-text>
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding="30px">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold" color="#2c3e50">
          Order #12345
        </mj-text>
        <mj-divider border-color="#ecf0f1" />
        
        <mj-table>
          <tr style="border-bottom: 1px solid #ecf0f1;">
            <td style="padding: 15px 0;">Wireless Headphones</td>
            <td style="text-align: right; padding: 15px 0;">$99.99</td>
          </tr>
          <tr style="border-bottom: 1px solid #ecf0f1;">
            <td style="padding: 15px 0;">Shipping</td>
            <td style="text-align: right; padding: 15px 0;">$9.99</td>
          </tr>
          <tr style="font-weight: bold;">
            <td style="padding: 15px 0;">Total</td>
            <td style="text-align: right; padding: 15px 0;">$109.98</td>
          </tr>
        </mj-table>
        
        <mj-button background-color="#3498db" color="white" border-radius="6px" padding="15px 25px">
          Track Your Order
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>` :
`import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr,
  Link
} from "@react-email/components";

const OrderConfirmationEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Your order #12345 has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Heading style={h1}>Order Confirmed! 🎉</Heading>
                <Text style={subtitle}>
                  Thanks for your purchase, John!
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Order Details */}
          <Section style={orderSection}>
            <Row>
              <Column>
                <Heading as="h2" style={h2}>
                  Order #12345
                </Heading>
                <Text style={orderDate}>
                  Placed on September 26, 2025
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Items */}
          <Section style={itemsSection}>
            <Row style={itemRow}>
              <Column style={itemName}>
                <Text style={productName}>Wireless Headphones</Text>
                <Text style={productDetails}>Qty: 1</Text>
              </Column>
              <Column style={itemPrice}>
                <Text style={price}>$99.99</Text>
              </Column>
            </Row>
            
            <Row style={itemRow}>
              <Column style={itemName}>
                <Text style={productName}>Shipping</Text>
              </Column>
              <Column style={itemPrice}>
                <Text style={price}>$9.99</Text>
              </Column>
            </Row>

            <Hr style={divider} />
            
            <Row style={totalRow}>
              <Column style={itemName}>
                <Text style={totalLabel}>Total</Text>
              </Column>
              <Column style={itemPrice}>
                <Text style={totalPrice}>$109.98</Text>
              </Column>
            </Row>
          </Section>

          {/* Shipping Info */}
          <Section style={shippingSection}>
            <Row>
              <Column>
                <Heading as="h3" style={h3}>Shipping Address</Heading>
                <Text style={address}>
                  John Doe<br />
                  123 Main Street<br />
                  New York, NY 10001<br />
                  United States
                </Text>
              </Column>
            </Row>
          </Section>

          {/* CTA */}
          <Section style={ctaSection}>
            <Row>
              <Column>
                <Button href="https://example.com/track/12345" style={button}>
                  Track Your Order
                </Button>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Row>
              <Column>
                <Text style={footerText}>
                  Questions? <Link href="mailto:support@example.com" style={link}>Contact us</Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "0",
};

const header = {
  backgroundColor: "#f8f9fa",
  padding: "40px 30px",
  textAlign: "center",
};

const h1 = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#2c3e50",
  margin: "0 0 10px 0",
};

const subtitle = {
  fontSize: "16px",
  color: "#7f8c8d",
  margin: "0",
};

const orderSection = {
  padding: "30px",
};

const h2 = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#2c3e50",
  margin: "0 0 5px 0",
};

const orderDate = {
  fontSize: "14px",
  color: "#7f8c8d",
  margin: "0",
};

const divider = {
  borderColor: "#ecf0f1",
  margin: "20px 0",
};

const itemsSection = {
  padding: "0 30px",
};

const itemRow = {
  marginBottom: "15px",
};

const itemName = {
  width: "70%",
  verticalAlign: "top",
};

const itemPrice = {
  width: "30%",
  textAlign: "right",
  verticalAlign: "top",
};

const productName = {
  fontSize: "16px",
  color: "#2c3e50",
  margin: "0 0 5px 0",
};

const productDetails = {
  fontSize: "14px",
  color: "#7f8c8d",
  margin: "0",
};

const price = {
  fontSize: "16px",
  color: "#2c3e50",
  margin: "0",
};

const totalRow = {
  marginTop: "10px",
};

const totalLabel = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#2c3e50",
  margin: "0",
};

const totalPrice = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#2c3e50",
  margin: "0",
};

const shippingSection = {
  padding: "30px",
  backgroundColor: "#f8f9fa",
};

const h3 = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#2c3e50",
  margin: "0 0 10px 0",
};

const address = {
  fontSize: "14px",
  color: "#7f8c8d",
  lineHeight: "1.5",
  margin: "0",
};

const ctaSection = {
  padding: "40px 30px",
  textAlign: "center",
};

const button = {
  backgroundColor: "#3498db",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "15px 25px",
};

const footer = {
  padding: "30px",
  textAlign: "center",
  borderTop: "1px solid #ecf0f1",
};

const footerText = {
  fontSize: "14px",
  color: "#7f8c8d",
  margin: "0",
};

const link = {
  color: "#3498db",
  textDecoration: "none",
};

export default OrderConfirmationEmail;`}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {!input && (
                <div className="absolute inset-4 flex items-center justify-center text-gray-400 pointer-events-none">
                  <div className="text-center">
                    <Code2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Start typing or paste your code</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-800">Converted Output</h3>
                </div>
                {output && (
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      onClick={copyToClipboard}
                      title={copied ? "Copied!" : "Copy to clipboard"}
                    >
                      <Copy className={`h-4 w-4 ${copied ? 'text-green-600' : ''}`} />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={downloadOutput}
                      title="Download as file"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="h-96 relative">
              <pre className="w-full h-full p-4 bg-white/50 border-0 overflow-auto font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-800">
                {output}
              </pre>
              {!output && !isLoading && (
                <div className="absolute inset-4 flex items-center justify-center text-gray-400 pointer-events-none">
                  <div className="text-center">
                    <ArrowRight className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Converted code will appear here</p>
                  </div>
                </div>
              )}
              {copied && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm animate-fade-in">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white/50 px-4 py-2 rounded-full">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>Convert between MJML, React Email, HubSpot, Mailchimp, and Klaviyo formats</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}