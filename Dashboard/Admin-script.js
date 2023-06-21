/* Admin functionalities */

const requestpaneloptions = document.querySelector("#request-panel-options").children;
const requestpanelrequests = document.querySelector("#request-panel-requests").children;

for (let i = 0; i < requestpaneloptions.length; i++) {
    requestpaneloptions[i].onclick = () => {
        let j = 0;
        while(j < requestpaneloptions.length) {
            requestpaneloptions[j].classList.remove("active");
            requestpanelrequests[j].classList.remove("active");
            j++;
        }
        requestpaneloptions[i].classList.add("active");
        requestpanelrequests[i].classList.add("active");
    }
}

// A confirmation box should appear if the user is leaving
// the document and the notification contains some value.

// Resizable notification box

const resizableElement = document.getElementById('notification-area');
const resizerTop = resizableElement.querySelector('#notification-resizer');

let height;
let yCard = 0;

const onMouseMoveTopResize = (e) => {
    const dy = e.clientY - yCard;
    height = height - dy;
    yCard = e.clientY;
    resizableElement.style.height = `${height}px`;
};

const onMouseUpTopResize = (e) => {
    document.removeEventListener('mousemove', onMouseMoveTopResize);
};

const onMouseDownTopResize = (e) => {
    height = parseInt(window.getComputedStyle(resizableElement).getPropertyValue('height'));
    yCard = e.clientY;
    const styles = window.getComputedStyle(resizableElement);
    resizableElement.style.bottom = styles.bottom;
    resizableElement.style.top = null;
    document.addEventListener('mousemove', onMouseMoveTopResize);
    document.addEventListener('mouseup', onMouseUpTopResize);
};



// Opening / Closing notification box

const createnotification = document.getElementById("create-notification");
const writingsystem = document.getElementById("writing-system");

createnotification.onclick = () => {
    if (writingsystem.classList.contains("active")) {
        createnotification.children[0].children[0].style.rotate = "0deg";
        createnotification.children[1].textContent = "Create new notice";
        writingsystem.classList.remove("active");
        resizableElement.style.height = 'max-content';
        resizerTop.removeEventListener('mousedown', onMouseDownTopResize);
    }
    else {
        createnotification.children[0].children[0].style.rotate = "135deg";
        createnotification.children[1].textContent = "Close the panel";
        writingsystem.classList.add("active");
        resizableElement.style.height = '40vh';
        resizerTop.addEventListener('mousedown', onMouseDownTopResize);
    }
}