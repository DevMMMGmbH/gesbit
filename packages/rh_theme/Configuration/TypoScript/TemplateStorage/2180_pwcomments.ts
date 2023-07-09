// [globalVar = TSFE:id=43]
[getTSFE().id == 43]



page.10{
  variables{
    contentMain >

    contentMain = COA
    contentMain {
      10 < styles.content.get
      
      # List comments
      20 < lib.pwCommentsIndex
      
      # Write new comment
      30 < lib.pwCommentsNew
    }
  }
}

plugin.tx_pwcomments{
  settings {

    useEntryUid = 1
    entryUid = TEXT
    entryUid.data = GP:tx_news_pi1|news

    moderateNewComments = 0
    secondsBetweenTwoComments = 6
    
    showGravatarImage = 0
    invertCommentSorting = 1
    
    enableCommentVotes = 0
    enableReplyVotes = 0
    enableVoting = 0
    hideVoteButtons = 1
    ignoreVotingForOwnComments = 1
#    replaceUsernameWith = 0
#    replaceMailWith = 0
  }

  _LOCAL_LANG.de.tx_pwcomments{
    validation_error.1299628038 = Bitte füllen Sie Name und E-Mail-Adresse aus.
    thanks = Vielen Dank für Ihren Kommentar!
  }
}
[global]
