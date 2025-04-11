exports.generateBotReply = async (message) => {
    // Tùy vào logic riêng hoặc nối với AI model
    if (message.toLowerCase().includes('khóa học')) {
      return 'Bạn muốn biết thêm về khóa học nào?';
    }
    return `Bạn vừa nói: "${message}". Tôi có thể giúp gì cho bạn?`;
  };
  