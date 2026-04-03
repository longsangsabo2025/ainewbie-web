import { Link } from "react-router-dom";
import { Facebook, Twitter, Send, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-tech-darker">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-box">
                <span className="text-primary font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold glow-text">AINewbieVN</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Nền tảng hàng đầu về AI và tự động hóa tại Việt Nam
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/longsang.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/longsang_ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://t.me/longsang_community" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="mailto:longsang063@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Nội Dung</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog AI</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Khóa Học</Link></li>
              <li><a href="https://youtube.com/@dungdaydi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube Channel</a></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">AI Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Cộng Đồng</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/community" className="hover:text-primary transition-colors">Tham Gia</Link></li>
              <li><a href="https://t.me/longsang_community" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Sự Kiện</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Mentor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Công Ty</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Về Chúng Tôi</Link></li>
              <li><a href="mailto:longsang063@gmail.com" className="hover:text-primary transition-colors">Liên Hệ</a></li>
              <li><a href="https://longsang.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Long Sang Forge</a></li>
              <li><a href="https://saboarena.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sabo Arena</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AINewbieVN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
