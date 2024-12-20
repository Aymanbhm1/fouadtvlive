 function playChannel(url, channelName) {
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const videoSource = document.getElementById('videoSource');
        const videoPlayer = document.getElementById('videoPlayer');
        const videoTitle = document.getElementById('videoTitle');
        
        // Update the video source and channel name
        videoSource.src = url;
        videoTitle.textContent = channelName;
        
        // Load and display the video player
        videoPlayer.load();
        videoPlayerContainer.style.display = 'block';
    }

    function closeVideo() {
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const videoPlayer = document.getElementById('videoPlayer');
        
        // Stop the video and hide the player
        videoPlayer.pause();
        videoPlayerContainer.style.display = 'none';
    }
