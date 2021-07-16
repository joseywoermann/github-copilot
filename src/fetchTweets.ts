const apiToken = "YOUR_API_TOKEN";

const fetchTweetsFromUser = (user: string) => {
    return fetch(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=200&tweet_mode=extended`
    )
        .then((response: Response) => {
            return response.json();
        })
        .then((tweets: any[]) => {
            const tweetsWithUrls = tweets.map((tweet: any) => {
                const urls = tweet.entities.urls;
                const urlsString = urls
                    .map((url: any) => {
                        return url.expanded_url;
                    })
                    .join("\n");

                return {
                    ...tweet,
                    urlsString,
                };
            });

            return tweetsWithUrls;
        });
};
