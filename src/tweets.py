import tweepy

def fetch_tweets_from_user(user):
    """
    Fetches tweets from a user.
    """
    tweets = []
    for tweet in tweepy.Cursor(api.user_timeline, id=user).items():
        tweets.append(tweet)
    return tweets
