function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
}
const sections = [
    selectElementByClass('profil'),
    selectElementByClass('skills'),
    selectElementByClass('experiences'),
    selectElementByClass('hobbies'),
    selectElementByClass('contact'),
];

const navItems = {
    profil: selectElementByClass('profilNavItem'),
    skills: selectElementByClass('skillsNavItem'),
    experiences: selectElementByClass('experiencesNavItem'),
    hobbies: selectElementByClass('hobbiesNavItem'),
    contact: selectElementByClass('contactNavItem'),
};

const scrollItems = {
    profil: selectElementByClass('profilScrollItem'),
    skills: selectElementByClass('skillsScrollItem'),
    experiences: selectElementByClass('experiencesScrollItem'),
    hobbies: selectElementByClass('hobbiesScrollItem'),
    contact: selectElementByClass('contactScrollItem'),
};

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};

function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // get the nav item corresponding to the id of the section
            // that is currently in view
            const navItem = navItems[entry.target.id];
            const scrollItem = scrollItems[entry.target.id];
            // add 'active' class on the navItem
            navItem.classList.add('active');
            scrollItem.classList.add('active');
            // remove 'active' class from any navItem that is not
            // same as 'navItem' defined above
            Object.values(navItems).forEach((item) => {
                if (item != navItem) {
                    item.classList.remove('active');
                }
            });
            Object.values(scrollItems).forEach((item) => {
                if (item != scrollItem) {
                    item.classList.remove('active');
                }
            });
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));