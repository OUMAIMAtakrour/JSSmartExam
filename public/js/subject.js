var createModal = document.getElementById("createSubjectModal");
var updateModal = document.getElementById("updateSubjectModal");

var createBtn = document.getElementById("createSubjectBtn");

var spans = document.getElementsByClassName("close");

createBtn.onclick = function () {
  createModal.style.display = "block";
};

for (let span of spans) {
  span.onclick = function () {
    createModal.style.display = "none";
    updateModal.style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target == createModal) {
    createModal.style.display = "none";
  }
  if (event.target == updateModal) {
    updateModal.style.display = "none";
  }
};

function openUpdateModal(id, name, parentId) {
  document.getElementById(
    "updateSubjectForm"
  ).action = `/subject/${id}?_method=PUT`;
  document.getElementById("update_subject_name").value = name;
  document.getElementById("update_parent_subject_id").value = parentId;
  updateModal.style.display = "block";
}
