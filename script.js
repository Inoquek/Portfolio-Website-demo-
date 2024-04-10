
    function openTab(event, tabName) {
        var i, tabContent, tabLinks;

        // Hide all tab content
        tabContent = document.getElementsByClassName("tab");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // Remove 'active' class from all tab links
        tabLinks = document.getElementsByTagName("a");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active");
        }

        // Show the selected tab content and set the tab link as active
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.classList.add("active");
    }
