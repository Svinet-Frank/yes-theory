        let open1 = document.getElementById("my-events");
        let open2 = document.getElementById("create-event");
        let open3 = document.getElementById("messages");

        function openTab1() {
            if (open1.style.display === "block") {
                open1.style.display = "none";
            } else {
                open1.style.display = "block"
                open2.style.display = "none"
                open3.style.display = "none";
            }
        }

        function openTab2() {
            if (open2.style.display === "block") {
                open2.style.display = "none";
            } else {
                open2.style.display = "block"
                open1.style.display = "none"
                open3.style.display = "none";
            }
        }

        function openTab3() {
            if (open3.style.display === "block") {
                open3.style.display = "none";
            } else {
                open3.style.display = "block"
                open1.style.display = "none"
                open2.style.display = "none";
            }
        }