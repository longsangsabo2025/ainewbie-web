import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, User, Search, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Prompt Engineering: Nghệ Thuật Giao Tiếp Với AI",
    excerpt: "Prompt engineering không chỉ là viết câu lệnh — đó là nghệ thuật dẫn dắt AI tạo ra kết quả chính xác. Bài viết phân tích 7 kỹ thuật prompt nâng cao giúp bạn khai thác tối đa sức mạnh của ChatGPT, Claude và Gemini trong công việc hàng ngày.",
    category: "Kỹ Thuật",
    author: "Long Sang",
    date: "25 Tháng 2, 2026",
    readTime: "8 phút đọc",
    featured: true,
  },
  {
    id: 2,
    title: "RAG vs Fine-tuning: Khi Nào Dùng Cái Nào?",
    excerpt: "Hai phương pháp phổ biến nhất để tùy chỉnh mô hình ngôn ngữ lớn cho doanh nghiệp. RAG (Retrieval-Augmented Generation) phù hợp khi dữ liệu thay đổi liên tục, còn fine-tuning hiệu quả khi cần chuyên sâu một lĩnh vực cụ thể.",
    category: "Deep Dive",
    author: "AI Research Team",
    date: "23 Tháng 2, 2026",
    readTime: "12 phút đọc",
    featured: false,
  },
  {
    id: 3,
    title: "Xây Dựng AI Agent Đầu Tiên Với LangChain",
    excerpt: "Hướng dẫn từng bước tạo AI agent có khả năng tìm kiếm web, đọc tài liệu và trả lời câu hỏi tự động. Sử dụng LangChain + Python, từ zero đến deployment trong 2 giờ.",
    category: "Tutorial",
    author: "Dev Community",
    date: "20 Tháng 2, 2026",
    readTime: "15 phút đọc",
    featured: false,
  },
  {
    id: 4,
    title: "Tổng Quan AI Việt Nam 2026: Cơ Hội và Thách Thức",
    excerpt: "Thị trường AI Việt Nam đang bùng nổ với hàng trăm startup mới. Từ VinAI đến các công ty nhỏ đang ứng dụng AI vào nông nghiệp, y tế, giáo dục — đây là bức tranh toàn cảnh mà mọi người làm tech cần biết.",
    category: "Phân Tích",
    author: "Long Sang",
    date: "18 Tháng 2, 2026",
    readTime: "10 phút đọc",
    featured: false,
  },
  {
    id: 5,
    title: "Tự Động Hóa Quy Trình Kinh Doanh Với n8n và AI",
    excerpt: "n8n là công cụ workflow automation mã nguồn mở mạnh mẽ. Kết hợp với các API AI như OpenAI và Gemini, bạn có thể tự động hóa từ email marketing đến phân tích dữ liệu khách hàng — không cần viết code.",
    category: "No-Code",
    author: "Automation Hub",
    date: "15 Tháng 2, 2026",
    readTime: "7 phút đọc",
    featured: false,
  },
  {
    id: 6,
    title: "ComfyUI: Tạo Hình Ảnh AI Chuyên Nghiệp",
    excerpt: "ComfyUI mang đến sức mạnh của Stable Diffusion thông qua giao diện node-based trực quan. Bài viết hướng dẫn cài đặt, các workflow phổ biến, và cách tối ưu chất lượng hình ảnh cho dự án sáng tạo của bạn.",
    category: "Creative AI",
    author: "Visual AI Lab",
    date: "12 Tháng 2, 2026",
    readTime: "11 phút đọc",
    featured: false,
  },
];

const categories = ["Tất cả", "Kỹ Thuật", "Deep Dive", "Tutorial", "Phân Tích", "No-Code", "Creative AI"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCategory = selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glow-text">Blog</span> AI Việt Nam
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kiến thức AI từ cơ bản đến nâng cao, viết bởi cộng đồng cho cộng đồng
            </p>
          </div>

          {featuredPost && (
            <GlowCard glowIntensity="high" className="mb-12 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-primary/40" />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Badge variant="outline" className="w-fit border-primary/50 text-primary">
                    Bài Viết Nổi Bật
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                  </div>
                  <Button className="w-fit bg-primary hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.4)] group">
                    Đọc Ngay <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </GlowCard>
          )}

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? "bg-primary" : "border-primary/30 hover:bg-primary/10"}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <GlowCard key={post.id} className="group hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <Badge variant="outline" className="mb-3 border-primary/30 text-primary text-xs">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </GlowCard>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Không tìm thấy bài viết nào phù hợp</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
