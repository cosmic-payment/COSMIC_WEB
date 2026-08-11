const WALLET_CSS = `
.cosmic-wallet {
  font-family: inherit;
}
.cosmic-wallet .wallet {
  position: relative;
  width: 280px;
  height: 230px;
  cursor: pointer;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.4s ease;
}
@keyframes cosmicSlideIntoPocket {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.cosmic-wallet .wallet-back {
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 200px;
  background: #1e341e;
  border-radius: 22px 22px 60px 60px;
  z-index: 5;
  box-shadow: inset 0 25px 35px rgba(0, 0, 0, 0.4), inset 0 5px 15px rgba(0, 0, 0, 0.5);
}
.cosmic-wallet .card {
  position: absolute;
  width: 260px;
  height: 140px;
  left: 10px;
  border-radius: 16px;
  padding: 18px;
  color: white;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 -4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s;
  animation: cosmicSlideIntoPocket 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
}
.cosmic-wallet .card-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.cosmic-wallet .card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cosmic-wallet .card-brand {
  display: flex;
  align-items: center;
  gap: 6px;
}
.cosmic-wallet .card-brand img {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  object-fit: cover;
}
.cosmic-wallet .card-logo {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
}
.cosmic-wallet .card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.cosmic-wallet .label {
  font-size: 8px;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 2px;
  display: block;
}
.cosmic-wallet .value {
  font-size: 10px;
  font-weight: 500;
}
.cosmic-wallet .card-number-wrapper {
  text-align: right;
}
.cosmic-wallet .hidden-stars {
  font-size: 16px;
  letter-spacing: 2px;
}
.cosmic-wallet .card-number {
  display: none;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: monospace;
}
.cosmic-wallet .kenya {
  background: #635bff;
  bottom: 90px;
  z-index: 10;
  animation-delay: 0.1s;
}
.cosmic-wallet .uk {
  background: #9bd86a;
  bottom: 65px;
  z-index: 20;
  animation-delay: 0.2s;
}
.cosmic-wallet .usa {
  background: #ffffff;
  color: #003087;
  bottom: 40px;
  z-index: 30;
  animation-delay: 0.3s;
}
.cosmic-wallet .usa .card-logo {
  color: #003087;
}
.cosmic-wallet .usa .label {
  color: #8c979d;
}
.cosmic-wallet .pocket {
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 160px;
  z-index: 40;
  filter: drop-shadow(0 15px 25px rgba(20, 40, 20, 0.4));
}
.cosmic-wallet .pocket-content {
  position: absolute;
  top: 45px;
  width: 100%;
  text-align: center;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cosmic-wallet .balance-stars {
  color: #839e7b;
  font-size: 24px;
  letter-spacing: 4px;
  transition: 0.3s;
}
.cosmic-wallet .balance-real {
  color: #a7c59e;
  font-size: 22px;
  font-weight: 600;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10px);
  transition: 0.3s;
}
.cosmic-wallet .eye-icon-wrapper {
  margin-top: 8px;
  height: 20px;
  width: 20px;
  position: relative;
  opacity: 0.3;
  transition: 0.3s;
}
.cosmic-wallet .eye-icon {
  position: absolute;
  top: 0;
  left: 0;
  stroke: #3be60b;
  transition: 0.3s;
}
.cosmic-wallet .wallet:hover {
  transform: translateY(-5px);
}
.cosmic-wallet .wallet:hover .eye-icon-wrapper {
  opacity: 1;
}
.cosmic-wallet .wallet:hover .kenya {
  transform: translateY(-75px) rotate(-3deg);
}
.cosmic-wallet .wallet:hover .uk {
  transform: translateY(-45px) rotate(2deg);
}
.cosmic-wallet .wallet:hover .usa {
  transform: translateY(-10px);
}
.cosmic-wallet .card:hover .hidden-stars {
  display: none;
}
.cosmic-wallet .card:hover .card-number {
  display: block;
}
.cosmic-wallet .wallet:hover .balance-stars {
  opacity: 0;
}
.cosmic-wallet .wallet:hover .balance-real {
  opacity: 1;
  transform: translate(-50%, 0);
}
.cosmic-wallet .wallet:hover .eye-slash {
  opacity: 0;
  transform: scale(0.5);
}
.cosmic-wallet .wallet:hover .eye-open {
  opacity: 1;
  transform: scale(1.1);
}
`;

import Image from "next/image";

const flags = {
  kenya: "https://flagcdn.com/w80/ke.png",
  uk: "https://flagcdn.com/w80/gb.png",
  usa: "https://flagcdn.com/w80/us.png",
};

export function WalletCard() {
  return (
    <div className="cosmic-wallet">
      <style>{WALLET_CSS}</style>
      <div className="app-container">
        <div className="wallet">
          <div className="wallet-back" />
          <div className="card kenya">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-brand">
                  <Image src={flags.kenya} alt="Kenya flag" width={20} height={20} />
                  Kenya
                </span>
                <span className="card-logo">COSMIC</span>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">Holder</span>
                  <span className="value">ALEX SMITH</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 4242</span>
                  <span className="card-number">5524 9910 4242</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card uk">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-brand">
                  <Image src={flags.uk} alt="UK flag" width={20} height={20} />
                  UK
                </span>
                <span className="card-logo">COSMIC</span>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">Business</span>
                  <span className="value">STUDIO LLC</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 8810</span>
                  <span className="card-number">9012 4432 8810</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card usa">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-brand">
                  <Image src={flags.usa} alt="USA flag" width={20} height={20} />
                  USA
                </span>
                <span className="card-logo">COSMIC</span>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">Holder</span>
                  <span className="value">MICHAEL JOHNSON</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 0094</span>
                  <span className="card-number">3312 0045 0094</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pocket">
            <svg className="pocket-svg" viewBox="0 0 280 160" fill="none">
              <path
                d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z"
                fill="#1e341e"
              />
              <path
                d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z"
                stroke="#3d5635"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
            <div className="pocket-content">
              <div style={{ position: "relative", height: 24, width: "100%" }}>
                <div className="balance-stars">******</div>
                <div className="balance-real">$12,450.00</div>
              </div>
              <div style={{ color: "#698263", fontSize: 12, fontWeight: 500 }}>
                Total Balance
              </div>
              <div className="eye-icon-wrapper">
                <svg
                  className="eye-icon eye-slash"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                  <line x1={3} y1={3} x2={21} y2={21} />
                </svg>
                <svg
                  className="eye-icon eye-open"
                  style={{ opacity: 0 }}
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
