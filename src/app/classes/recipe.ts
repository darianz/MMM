export class Recipe {
    _headline = 'headline check'; // headline of the recipe
    _description = 'description check'; // Description by user
    _informativeInformation; // how long gonna take complexity etc..
    _conclusion = 'conclusion check'; // Conclusion by user
    _stagesArray = [];
    _milestones = [];
    _coverImage;
    _image1;
    _image2;
    _videoLink;

    constructor(headline: string, description: string, conclusion: string ) {

        this._headline = headline;
        this._description = description;
        this._conclusion = conclusion;
    }
}
