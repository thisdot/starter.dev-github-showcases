import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** An Organization object used in Owner */
export type Orgs = {
  __typename?: 'Orgs';
  avatar?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  membersCount?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reposCount?: Maybe<Scalars['String']>;
};

/** An Owner object */
export type Owner = {
  __typename?: 'Owner';
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<Scalars['String']>;
  following?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgs?: Maybe<Array<Maybe<Orgs>>>;
  starCount?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
};

/** GitHub queries */
export type Query = {
  __typename?: 'Query';
  /** Simple hello world query that accepts a greeting */
  hello: Scalars['String'];
  owner?: Maybe<Owner>;
  repo?: Maybe<Repo>;
  repos?: Maybe<Array<Maybe<Repo>>>;
};


/** GitHub queries */
export type QueryHelloArgs = {
  greeting: Scalars['String'];
};


/** GitHub queries */
export type QueryRepoArgs = {
  owner: Scalars['String'];
  repoName: Scalars['String'];
};


/** GitHub queries */
export type QueryReposArgs = {
  perPage?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

/** A Repo object */
export type Repo = {
  __typename?: 'Repo';
  description?: Maybe<Scalars['String']>;
  forkCount?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  private?: Maybe<Scalars['Boolean']>;
  readme?: Maybe<Scalars['String']>;
  stargazersCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tree: Array<Maybe<TreeEntry>>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** File Tree */
export type TreeEntry = {
  __typename?: 'TreeEntry';
  mode: Scalars['String'];
  path: Scalars['String'];
  sha: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

/** A User object used in Repo */
export type User = {
  __typename?: 'User';
  login?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Orgs: ResolverTypeWrapper<Orgs>;
  Owner: ResolverTypeWrapper<Owner>;
  Query: ResolverTypeWrapper<{}>;
  Repo: ResolverTypeWrapper<Repo>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TreeEntry: ResolverTypeWrapper<TreeEntry>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Orgs: Orgs;
  Owner: Owner;
  Query: {};
  Repo: Repo;
  String: Scalars['String'];
  TreeEntry: TreeEntry;
  User: User;
};

export type OrgsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Orgs'] = ResolversParentTypes['Orgs']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  membersCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reposCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  following?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orgs']>>>, ParentType, ContextType>;
  starCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryHelloArgs, 'greeting'>>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  repo?: Resolver<Maybe<ResolversTypes['Repo']>, ParentType, ContextType, RequireFields<QueryRepoArgs, 'owner' | 'repoName'>>;
  repos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Repo']>>>, ParentType, ContextType, RequireFields<QueryReposArgs, 'username'>>;
};

export type RepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repo'] = ResolversParentTypes['Repo']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forkCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stargazersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tree?: Resolver<Array<Maybe<ResolversTypes['TreeEntry']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TreeEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TreeEntry'] = ResolversParentTypes['TreeEntry']> = {
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sha?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Orgs?: OrgsResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repo?: RepoResolvers<ContextType>;
  TreeEntry?: TreeEntryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

