document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        ---------------------------------------
        Education: 
        ${education}
        ---------------------------------------
        Experience: 
        ${experience}
        ---------------------------------------
        Skills: 
        ${skills}
    `;

    document.getElementById('generatedResume').textContent = resumeContent;
});
