class Image {
    constructor(title, description, submittedBy, path) {
        this.title = title;
        this.description = description;
        this.submittedBy = submittedBy;
        this.path = path;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getSubmittedBy(){
        return this.submittedBy;
    }

    getPath(){
        return this.path;
    }
}

module.exports = Image;
