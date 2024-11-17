// Function to handle file uploads
function uploadFiles() {
    // Get references to the DOM elements
    const fileInput = document.getElementById('fileInput');
    const uploadStatus = document.getElementById('uploadStatus');
    const fileList = document.getElementById('fileList');

    // Check if any files were selected
    if (fileInput.files.length === 0) {
        uploadStatus.innerText = 'Please select files to upload.'; // Prompt user to select files
        return; // Exit the function if no files are selected
    }

    // Update the status to indicate uploading
    uploadStatus.innerText = 'Uploading...';

    // Simulate file upload with a timeout (replace this with actual upload logic)
    setTimeout(() => {
        // Clear previous file list before adding new items
        fileList.innerHTML = '';

        // Loop through the selected files
        Array.from(fileInput.files).forEach(file => {
            // Create a new list item for each file
            const li = document.createElement('li');
            li.innerText = file.name; // Set the text to the file name

            // Optionally, you can add a delete button to remove the file from the list
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Remove';
            deleteButton.onclick = () => {
                fileList.removeChild(li); // Remove the file from the list
            };
            li.appendChild(deleteButton); // Append the delete button to the list item

            // Append the list item to the file list
            fileList.appendChild(li);
        });

        // Update the status to indicate success
        uploadStatus.innerText = 'Files uploaded successfully!';
        
        // Clear the file input for future uploads
        fileInput.value = ''; 
    }, 1000); // Simulate a 1 second upload time
}

// Optional: Add an event listener for the file input to clear the status when files are selected
document.getElementById('fileInput').addEventListener('change', () => {
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.innerText = ''; // Clear the status message when new files are selected
});