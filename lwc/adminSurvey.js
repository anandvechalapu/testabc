import { LightningElement, track } from 'lwc';

export default class AdminSurvey extends LightningElement {
    @track domainList = ['India', 'USA', 'Both'];
    @track statusList = ['Active', 'Inactive'];
    @track surveyStateList = ['Not Started', 'Started', 'Cancelled', 'Completed'];
    @track pageNameList = ['Home', 'Profile', 'Search Post', 'Post detail', 'Webinar Detail'];
    @track targetUserList = ['All Users', 'Exclude Users'];
    @track answerTypeList = ['Single Choice', 'Multi Choice', 'Text', 'Rating'];

    handleDomainChange(event) {
        // Handle the domain change event
    }

    handleTitleChange(event) {
        // Handle the title change event
    }

    handleDelayTimeChange(event) {
        // Handle the delay time change event
    }

    handleStatusChange(event) {
        // Handle the status change event
    }

    handleSurveyStateChange(event) {
        // Handle the survey state change event
    }

    handlePageNameChange(event) {
        // Handle the page name change event
    }

    handleStartDateChange(event) {
        // Handle the start date change event
    }

    handleEndDateChange(event) {
        // Handle the end date change event
    }

    handleTargetUserChange(event) {
        // Handle the target user change event
    }

    handleSpecialtyChange(event) {
        // Handle the specialty change event
    }

    handlePreferencesChange(event) {
        // Handle the preferences change event
    }

    handleCountryChange(event) {
        // Handle the country change event
    }

    handleRegionChange(event) {
        // Handle the region change event
    }

    handleCityChange(event) {
        // Handle the city change event
    }

    handleSendToSpecificUserChange(event) {
        // Handle the send to specific user change event
    }

    handleQuestionTitleChange(event) {
        // Handle the question title change event
    }

    handleAnswerTypeChange(event) {
        // Handle the answer type change event
    }

    handleRatingChange(event) {
        // Handle the rating change event
    }

    handleUpdateSurveyChange(event) {
        // Handle the update survey change event
    }

    handleCancelSurveyChange(event) {
        // Handle the cancel survey change event
    }

    handleDeleteSurveyChange(event) {
        // Handle the delete survey change event
    }

    handleViewSurveyReportChange(event) {
        // Handle the view survey report change event
    }

    handleCheckUserResponseChange(event) {
        // Handle the check user response change event
    }
}