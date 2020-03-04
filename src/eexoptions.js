// Saves options to chrome.storage
function save_options() {
    var urllink = document.getElementById('urllink').value;
    $("#success-block").css("display", "none");
    $("#error-block").css("display", "none");
    setTimeout(() => {
        chrome.storage.sync.set({ urllink }, function () {
            // Update status to let user know options were saved.
            if (urllink) {
                eex.appendContentJs(urllink, 'boot');
            } else {
                $("#error-block").css("display", "initial");
            }
        });
    }, 300);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({ urllink: '' }, function (items) {
        document.getElementById('urllink').value = items.urllink;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

window.isoptionpage = true;