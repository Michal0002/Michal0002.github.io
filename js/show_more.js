// function toggleJobDescription(button) {
//     var jobDetails = document.getElementById("job-details");
//     // jobDetails.innerHTML = "some information about job";
//     jobDetails.classList.toggle("hidden");
//     if (jobDetails.classList.contains('hidden')) {
//         button.textContent = 'Show more';
//     } else {
//         button.textContent = 'Hide';
//     }
// }

function toggleJobDetails(button) {
    const jobContainer = button.closest('.square-container');
    const jobDetails = jobContainer.querySelector('.job-details');

    if (jobDetails.classList.contains('hidden')) {
        jobDetails.classList.remove('hidden');
        button.textContent = 'Hide';
    } else {
        jobDetails.classList.add('hidden');
        button.textContent = 'Show more';
    }
}