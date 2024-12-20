
    // إدخال وضع ملء الشاشة
    function enterFullScreen() {
      const elem = document.documentElement; // عنصر HTML الرئيسي
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // لـ Safari
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // لـ IE/Edge
        elem.msRequestFullscreen();
      }
    }

    // استدعاء ملء الشاشة عند أول تفاعل
    document.addEventListener("click", () => {
      enterFullScreen();
      document.getElementById("message").style.display = "none"; // إخفاء الرسالة
    });

    // منع التمرير إذا خرج المستخدم من ملء الشاشة
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        enterFullScreen();
      }
    });