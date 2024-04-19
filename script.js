const editButtonLabelElem = document.querySelector('#edit-button-label');
const imagePreview = document.getElementById('preview');
const imageInput = document.getElementById('edit-button'); 
const userPhotoElem = document.querySelector('.user-photo');
const userPhotoEditContainerElem = document.querySelector('#user-photo-edit-container');
const userPhotoEditContainerCloseButton = document.querySelector('#user-photo-edit-container-close-button')


imageInput.addEventListener('change', function () {
    const file = this.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader(); // Initialize a FileReader object
        reader.onprogress = function (e) {
           
        };
        reader.onload = function (e) {
            imagePreview.style.display =  'initial';
            // Set the source of the image element to the result of FileReader
            imagePreview.src = e.target.result;
           
        };
        // Read the selected file as a Data URL
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, display a default image
        imagePreview.src = '#';
      
    }
});


userPhotoElem.addEventListener('click', () => {

    userPhotoEditContainerElem.style.display = 'initial';
});

userPhotoEditContainerCloseButton.addEventListener('click', () => {

    userPhotoEditContainerElem.style.display = 'none';
});




document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("video-preview");
    const canvasElement = document.getElementById("canvas-preview");
    const captureButton = document.getElementById("capture-btn");
    const switchOnCameraButton = document.getElementById("switch-on-camera-btn");
    const saveButton = document.getElementById("save-btn");
    const capturedImageElement = document.getElementById("captured-image");
    const imageNameInput = document.getElementById("image-name-input");
    const savedImagesList = document.getElementById("saved-images-list");
    let isCameraOn = false;
    let stream = null;
    // Function to access the camera
    function accessCamera() {
      if (!isCameraOn) {
        navigator.mediaDevices
          .getUserMedia({
            video: true
          })
          .then(function (videoStream) {
            stream = videoStream;
            videoElement.srcObject = stream;
            videoElement.style.display = "block";
            captureButton.style.display = "block";
            isCameraOn = true;
            switchOnCameraButton.textContent = "Switch Off Camera";
          })
          .catch(function (error) {
            console.error("Error accessing the camera:", error);
          });
      } else {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        videoElement.srcObject = null;
        videoElement.style.display = "none";
        captureButton.style.display = "none";
        isCameraOn = false;
        switchOnCameraButton.textContent = "Switch On Camera";
      }
    }
    switchOnCameraButton.addEventListener("click", accessCamera);
    // Capture button click event
    captureButton.addEventListener("click", function () {
      const context = canvasElement.getContext("2d");
      // Set canvas size to match video
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
      // Draw video frame onto canvas
      context.drawImage(
        videoElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      // Convert canvas to image data URL
      const imageDataUrl = canvasElement.toDataURL("image/png");
      // Display captured image
      capturedImageElement.src = imageDataUrl;
      capturedImageElement.style.display = "block";
      // Show input field for image name
      imageNameInput.style.display = "block";
      // Show save button
      saveButton.style.display = "block";
    });
    // Save button click event
    saveButton.addEventListener("click", function () {
      // Get the data URL of the captured image
      const imageDataUrl = capturedImageElement.src;
      // Get the name entered by the user
      const imageName = imageNameInput.value;
      if (imageName.trim() === "") {
        alert("Please enter a name for the image.");
        return;
      }
      // Save the image data URL to localStorage with the provided name as the key
      localStorage.setItem(imageName, imageDataUrl);
      // Inform the user that the image has been saved
      alert("Image saved to localStorage!");
      // Hide captured image, input field, and save button
      capturedImageElement.style.display = "none";
      imageNameInput.style.display = "none";
      saveButton.style.display = "none";
      // Clear input field value
      imageNameInput.value = "";
      // Update saved images list
      updateSavedImagesList();
    });
    // Function to remove an image from localStorage
    function removeImage(key) {
      localStorage.removeItem(key);
      // Update saved images list
      updateSavedImagesList();
    }
    // Function to update saved images list
    function updateSavedImagesList() {
      savedImagesList.innerHTML = "";
      // Get all keys (image names) from localStorage
      const keys = Object.keys(localStorage);
      // Create list items for each image name
      keys.forEach(function (key) {
        const listItem = document.createElement("li");
        listItem.textContent = key;
        listItem.addEventListener("click", function () {
          // Display the selected image
          const imageDataUrl = localStorage.getItem(key);
          capturedImageElement.src = imageDataUrl;
          capturedImageElement.style.display = "block";
        });
        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", function () {
          removeImage(key);
        });
        // Append remove button to list item
        listItem.appendChild(removeBtn);
        // Append list item to saved images list
        savedImagesList.appendChild(listItem);
      });
    }
    // Initial update of saved images list
    updateSavedImagesList();
  });
  