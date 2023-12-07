plugin.tx_seminars{
    fieldsFromAttendanceForCsv = interests, expectations, background_knowledge, known_from, notes
    fieldsFromFeUserForCsv = name, address, zip, city, telephone, email, tx_men_gesbit_projekt, tx_men_gesbit_traeger
    fieldsFromEventsForCsv = uid, subtitle, description, event_type, date, time, place, room, speakers, price_regular, attendees, attendees_max, vacancies, is_full
    _LOCAL_LANG.de {
        label_tx_men_gesbit_projekt = Projekt
        label_tx_men_gesbit_traeger = Träger / Institution
        message_registrationOpensOn = beginnt am % s
    }

}
// [PIDinRootline = 30]

// [end]

#Intranet

// [PIDinRootline = 69]
[69 in tree.rootLineIds]


plugin.tx_seminars{
    attendancesPID = 71
    enableRegistration = 1

    templateFile = EXT:rh_theme/Resources/Private/Extensions/seminars/e-mail.html
    hideFieldsInThankYouMail = credit_points, billing_address, kids, planned_disclaimer, price, total_price, seats
    showSeminarFieldsInNotificationMail = date, place, attendees, vacancies, enough_attendees, is_full
    showAttendanceFieldsInNotificationMail = uid, seats, interests, expectations, known_from, notes
    showFeUserFieldsInNotificationMail = tx_men_gesbit_projekt, tx_men_gesbit_traeger, name, username, email, telephone

    _LOCAL_LANG.de {
        label_tx_men_gesbit_projekt = Projekt
        label_tx_men_gesbit_traeger = Träger / Institution
        label_tx_men_gesbit_gender = Anrede
        email_confirmationHello_formal = Sie haben sich zu der Veranstaltung "%s" angemeldet
        email_hello_formal_2 = Sehr geehrte(r) Frau / Herr
        email_hello_formal_99 = Sehr geehrte(r) Frau / Herr
        #### BR 20180611
        email_hello_formal_0 = Sehr geehrte(r) Frau / Herr
        email_hello_formal_1 = Sehr geehrte(r) Frau / Herr
        email_hello_formal_2 = Sehr geehrte(r) Frau / Herr
        email_hello_formal_99 = Sehr geehrte(r) Frau / Herr

        email_salutation_title_0 =
        email_salutation_title_1 =
        email_salutation_title_2 =
        email_salutation_title_99 =

        email_price =
            email_eventDate =
            email_timeFrom =
            email_timeAt =
            email_timeTo =
            email_notificationSubject = Neue Anmeldung
        label_expectations = Was erwarten Sie von der Veranstaltung ?
            label_interests = Welches Thema ist für Sie besonders von Interesse ?
                label_notes = Was möchten Sie uns noch mitteilen ?
                    label_known_from = Wie haben Sie von dieser Veranstaltung erfahren ?
  }
}

plugin.tx_seminars_pi1{
    templateFile = EXT:rh_theme/Resources/Private/Extensions/seminars/FrontEnd.html
    registrationEditorTemplateFile = EXT:rh_theme/Resources/Private/Extensions/seminars/RegistrationEditor.html
    numberOfClicksForRegistration = 2
    numberOfLastRegistrationPage = 2
    numberOfFirstRegistrationPage = 2
    showRegistrationFields = step_counter, notes, interests, known_from, expectations, registration_data, feuser_data

    loginPID = 72
    pageToShowAfterUnregistrationPID = 69
    myEventsPID = 69
    pages = 70
    registerPID = 74
    thankYouAfterRegistrationPID = 75
    listPID = 69
    detailPID = 73

    hideColumns = category, image, subtitle, event_type, accreditation_number, credit_points, teaser, time, expiry, place, city, country, price_special, language, target_groups, attached_files, status, price_regular, uid, speakers
    hideFields = eventsnextday, uid, category, price_regular, price_special, speakers

    _LOCAL_LANG.de {
        label_organizers = Projekt
        label_expectations = Was erwarten Sie von der Veranstaltung ?
            label_interests = Welches Thema ist für Sie besonders von Interesse ?
                label_notes = Was möchten Sie uns noch mitteilen ?
                    label_submit_registration = Jetzt anmelden
        label_step_counter = Schritt 1 von 1
        label_known_from = Wie haben Sie von dieser Veranstaltung erfahren ?
  }
}
[end]
