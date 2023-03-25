const show = (shown, hidden1, hidden2, hidden3) => {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
}

const nav_items = document.querySelectorAll('.selected');

for (let i = 0; i < nav_items.length; i++) {
    const TabNames = ['Home', 'About', 'Experience', 'Work'];
    nav_items[i].addEventListener('click', () => {
        document.title = `Alex Graham | ${TabNames[i]}`;
    });
}
