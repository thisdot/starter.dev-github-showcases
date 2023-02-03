export interface UserProfile {
    avatarUrl: string;
    bio: string;
    company: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    location: string;
    login: string;
    name: string;
    organizations: {
        nodes: {
            avatarUrl: string;
            login: string;
        }[];
    };
    starredRepositories: {
        totalCount: number;
    };
    twitterUsername: string;
    websiteUrl: string;
}