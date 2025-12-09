class Project {
    constructor(title, description, image, technologies, site, startDate, endDate, about, role, implementation) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.technologies = technologies;
        this.site = site;
        this.startDate = startDate; // formato MM/AAAA
        this.endDate = endDate; // formato MM/AAAA ou 'present'
        this.about = about; // descrição adicional sobre o projeto
        this.role = role;
        this.implementation = implementation;
    }
}

export default Project;