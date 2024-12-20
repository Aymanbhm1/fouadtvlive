  function openSection(sectionId) {
            // إخفاء جميع الأقسام
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // إظهار القسم المختار
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }

        // عرض القسم الأساسي عند تحميل الصفحة
        document.addEventListener("DOMContentLoaded", function() {
            openSection('bein');
        });
