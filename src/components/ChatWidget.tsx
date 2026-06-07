import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const messages = [
  {
    from: "bot",
    text: "Hey! 👋 I'm Sagar. What are you looking to build?",
  },
];

const quickReplies = [
  "AI Chatbot for my business",
  "Autonomous AI Agent",
  "FinTech / Trading AI tool",
  "Something else",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState(messages);
  const [input, setInput] = useState("");
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isOpen]);

  const sendMessage = (text: string) => {
    setChat((prev) => [...prev, { from: "user", text }]);
    setShowQuick(false);

    // Simple bot response
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Great! Let's set up a quick call to discuss your requirements. I'll suggest the best AI approach for your use case. 📞",
        },
        {
          from: "bot",
          text: "👉 Book a free 15-min call: calendly.com/sagarkaushikme",
        },
      ]);
    }, 900);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        id="chat-widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#6366F1] text-white flex items-center justify-center shadow-[0_8px_32px_rgba(99,102,241,0.5)] hover:bg-[#5558E8] hover:scale-110 transition-all"
        aria-label="Open chat"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#0A0A0F]" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-36 right-5 md:bottom-24 md:right-6 z-50 w-80 sm:w-[360px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden border border-[#1E1E2E] animate-scale-in">
          {/* Header */}
          <div className="bg-[#6366F1] px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Sagar Kaushik</p>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-[#0D0D14] px-4 py-4 h-64 overflow-y-auto space-y-3">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-[#6366F1] text-white rounded-br-sm"
                      : "bg-[#13131A] text-[#E2E8F0] border border-[#1E1E2E] rounded-bl-sm"
                  }`}
                >
                  {msg.text.includes("calendly.com") ? (
                    <a
                      href="https://calendly.com/sagarkaushikme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#10B981] underline"
                    >
                      {msg.text}
                    </a>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            {showQuick && (
              <div className="space-y-2 pt-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="block w-full text-left px-3 py-2 rounded-xl border border-[#1E1E2E] bg-[#13131A] text-[#A5B4FC] text-xs font-medium hover:border-[#6366F1]/40 hover:bg-[#6366F1]/5 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-[#13131A] border-t border-[#1E1E2E] px-3 py-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-[#0D0D14] border border-[#1E1E2E] text-white text-sm rounded-xl px-4 py-2.5 outline-none focus:border-[#6366F1]/50 placeholder:text-[#475569]"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-[#6366F1] text-white flex items-center justify-center hover:bg-[#5558E8] transition-colors flex-shrink-0"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
