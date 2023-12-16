//WoxicDEV - Javascript internetten yardım alınarak yazılmıştır.
//Yorum Satırı ekledim.

function showMoreInfo(boxNumber) {
    const aiBox = document.getElementById("aiBox" + boxNumber);
    const moreInfo = document.getElementById("moreInfo" + boxNumber);
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");

    aiBox.style.zIndex = "2";
    aiBox.style.transition = "transform 0.5s ease-in-out";
    aiBox.style.transform = "scale(1.2)";
    
    moreInfo.style.display = "block";

    // Modal içeriğini güncelleme yeri
    modalContent.innerHTML = moreInfo.innerHTML;

    // Modal'ı gösteriyor
    modal.style.display = "flex";
}

function hideMoreInfo(boxNumber) {
    const aiBox = document.getElementById("aiBox" + boxNumber);
    const moreInfo = document.getElementById("moreInfo" + boxNumber);
    const modal = document.getElementById("modal");

    aiBox.style.zIndex = "1";
    aiBox.style.transition = "transform 0.5s ease-in-out";
    aiBox.style.transform = "scale(1)";
    
    moreInfo.style.display = "none";
    
    // Modal'ı gizleme
    modal.style.display = "none";
}

function enlargeImage(boxNumber) {
    const aiBox = document.getElementById("aiBox" + boxNumber);
    aiBox.style.transition = "transform 0.5s ease-in-out";
    aiBox.style.transform = "scale(1.2)";
}

function shrinkImage(boxNumber) {
    const aiBox = document.getElementById("aiBox" + boxNumber);
    aiBox.style.transition = "transform 0.5s ease-in-out";
    aiBox.style.transform = "scale(1)";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
//bitti