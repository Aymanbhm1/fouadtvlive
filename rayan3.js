
    // منع النقر بزر الفأرة الأيمن
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // منع استخدام مفاتيح الاختصار (مثل Ctrl+C)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'u')) {
            event.preventDefault();
        }
    });