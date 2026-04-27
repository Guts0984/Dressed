import * as React from "react";
import { EmailVerficationProps } from "../email.types";

export default function ResetEmailPasswordTemplate({
  user,
  url,
}: EmailVerficationProps) {
  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "60px 20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "800",
              letterSpacing: "-0.5px",
              color: "#18181b",
            }}
          >
            DRESSED
          </span>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #667eea 0%, #f093fb 100%)",
            }}
          />

          {/* Body */}
          <div style={{ padding: "48px 48px 40px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#667eea",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                margin: "0 0 16px",
              }}
            >
              Password Reset
            </p>

            <h1
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#18181b",
                margin: "0 0 12px",
                letterSpacing: "-0.5px",
                lineHeight: "1.3",
              }}
            >
              Reset your password
            </h1>

            <p
              style={{
                fontSize: "15px",
                color: "#71717a",
                margin: "0 0 32px",
                lineHeight: "1.7",
              }}
            >
              Hey {user.name || user.email}, no worries — it happens. Click the
              button below to reset your password. Link expires in{" "}
              <span style={{ color: "#18181b", fontWeight: "600" }}>
                1 hour
              </span>
              .
            </p>

            {/* CTA */}
            <a
              href={url}
              style={{
                display: "block",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#ffffff",
                textDecoration: "none",
                padding: "15px 32px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                letterSpacing: "0.2px",
                marginBottom: "24px",
              }}
            >
              Reset Password
            </a>

            {/* Fallback URL */}
            <div
              style={{
                backgroundColor: "#f4f4f5",
                borderRadius: "8px",
                padding: "14px 16px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#a1a1aa",
                  margin: "0 0 6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  fontWeight: "600",
                }}
              >
                Or copy this link
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#667eea",
                  margin: "0",
                  wordBreak: "break-all",
                  lineHeight: "1.5",
                }}
              >
                {url}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: "1px solid #f4f4f5",
              padding: "20px 48px",
              backgroundColor: "#fafafa",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#a1a1aa",
                margin: "0",
                lineHeight: "1.6",
              }}
            >
              If you didn&apos;t request a password reset, you can safely ignore
              this email. Your password will not be changed.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#a1a1aa",
            marginTop: "24px",
          }}
        >
          © 2026 Dressed. All rights reserved.
        </p>
      </div>
    </div>
  );
}
