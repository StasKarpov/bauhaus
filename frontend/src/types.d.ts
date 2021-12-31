export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Coach = {
  __typename?: 'Coach';
  BottomText?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  FamilyName?: Maybe<Scalars['String']>;
  Image?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']>;
  NameInstrumental?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CoachEntity = {
  __typename?: 'CoachEntity';
  attributes?: Maybe<Coach>;
  id?: Maybe<Scalars['ID']>;
};

export type CoachEntityResponse = {
  __typename?: 'CoachEntityResponse';
  data?: Maybe<CoachEntity>;
};

export type CoachEntityResponseCollection = {
  __typename?: 'CoachEntityResponseCollection';
  data: Array<CoachEntity>;
  meta: ResponseCollectionMeta;
};

export type CoachFiltersInput = {
  BottomText?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  FamilyName?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  NameInstrumental?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CoachFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CoachFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CoachFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CoachInput = {
  BottomText?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  FamilyName?: InputMaybe<Scalars['String']>;
  Image?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  NameInstrumental?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  Email?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Number?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  Email?: InputMaybe<StringFilterInput>;
  LastName?: InputMaybe<StringFilterInput>;
  Message?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Number?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  Email?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Message?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Number?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Day = {
  __typename?: 'Day';
  Name?: Maybe<Scalars['String']>;
  ShortName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DayEntity = {
  __typename?: 'DayEntity';
  attributes?: Maybe<Day>;
  id?: Maybe<Scalars['ID']>;
};

export type DayEntityResponse = {
  __typename?: 'DayEntityResponse';
  data?: Maybe<DayEntity>;
};

export type DayEntityResponseCollection = {
  __typename?: 'DayEntityResponseCollection';
  data: Array<DayEntity>;
  meta: ResponseCollectionMeta;
};

export type DayFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  ShortName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DayInput = {
  Name?: InputMaybe<Scalars['String']>;
  ShortName?: InputMaybe<Scalars['String']>;
};

export type DayRelationResponseCollection = {
  __typename?: 'DayRelationResponseCollection';
  data: Array<DayEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Coach | Contact | Day | I18NLocale | Price | PriceType | Room | Training | TrainingType | Translation | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCoach?: Maybe<CoachEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createDay?: Maybe<DayEntityResponse>;
  createPrice?: Maybe<PriceEntityResponse>;
  createPriceType?: Maybe<PriceTypeEntityResponse>;
  createRoom?: Maybe<RoomEntityResponse>;
  createTraining?: Maybe<TrainingEntityResponse>;
  createTrainingType?: Maybe<TrainingTypeEntityResponse>;
  createTranslation?: Maybe<TranslationEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCoach?: Maybe<CoachEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteDay?: Maybe<DayEntityResponse>;
  deletePrice?: Maybe<PriceEntityResponse>;
  deletePriceType?: Maybe<PriceTypeEntityResponse>;
  deleteRoom?: Maybe<RoomEntityResponse>;
  deleteTraining?: Maybe<TrainingEntityResponse>;
  deleteTrainingType?: Maybe<TrainingTypeEntityResponse>;
  deleteTranslation?: Maybe<TranslationEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCoach?: Maybe<CoachEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateDay?: Maybe<DayEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePrice?: Maybe<PriceEntityResponse>;
  updatePriceType?: Maybe<PriceTypeEntityResponse>;
  updateRoom?: Maybe<RoomEntityResponse>;
  updateTraining?: Maybe<TrainingEntityResponse>;
  updateTrainingType?: Maybe<TrainingTypeEntityResponse>;
  updateTranslation?: Maybe<TranslationEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCoachArgs = {
  data: CoachInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateDayArgs = {
  data: DayInput;
};


export type MutationCreatePriceArgs = {
  data: PriceInput;
};


export type MutationCreatePriceTypeArgs = {
  data: PriceTypeInput;
};


export type MutationCreateRoomArgs = {
  data: RoomInput;
};


export type MutationCreateTrainingArgs = {
  data: TrainingInput;
};


export type MutationCreateTrainingTypeArgs = {
  data: TrainingTypeInput;
};


export type MutationCreateTranslationArgs = {
  data: TranslationInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCoachArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDayArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTrainingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTrainingTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTranslationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCoachArgs = {
  data: CoachInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateDayArgs = {
  data: DayInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePriceArgs = {
  data: PriceInput;
  id: Scalars['ID'];
};


export type MutationUpdatePriceTypeArgs = {
  data: PriceTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateRoomArgs = {
  data: RoomInput;
  id: Scalars['ID'];
};


export type MutationUpdateTrainingArgs = {
  data: TrainingInput;
  id: Scalars['ID'];
};


export type MutationUpdateTrainingTypeArgs = {
  data: TrainingTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateTranslationArgs = {
  data: TranslationInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Price = {
  __typename?: 'Price';
  Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  price_type?: Maybe<PriceTypeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PriceEntity = {
  __typename?: 'PriceEntity';
  attributes?: Maybe<Price>;
  id?: Maybe<Scalars['ID']>;
};

export type PriceEntityResponse = {
  __typename?: 'PriceEntityResponse';
  data?: Maybe<PriceEntity>;
};

export type PriceEntityResponseCollection = {
  __typename?: 'PriceEntityResponseCollection';
  data: Array<PriceEntity>;
  meta: ResponseCollectionMeta;
};

export type PriceFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  price_type?: InputMaybe<PriceTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PriceInput = {
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['String']>;
  price_type?: InputMaybe<Scalars['ID']>;
};

export type PriceType = {
  __typename?: 'PriceType';
  Image?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PriceTypeEntity = {
  __typename?: 'PriceTypeEntity';
  attributes?: Maybe<PriceType>;
  id?: Maybe<Scalars['ID']>;
};

export type PriceTypeEntityResponse = {
  __typename?: 'PriceTypeEntityResponse';
  data?: Maybe<PriceTypeEntity>;
};

export type PriceTypeEntityResponseCollection = {
  __typename?: 'PriceTypeEntityResponseCollection';
  data: Array<PriceTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type PriceTypeFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PriceTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PriceTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PriceTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PriceTypeInput = {
  Image?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  coach?: Maybe<CoachEntityResponse>;
  coaches?: Maybe<CoachEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  day?: Maybe<DayEntityResponse>;
  days?: Maybe<DayEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  price?: Maybe<PriceEntityResponse>;
  priceType?: Maybe<PriceTypeEntityResponse>;
  priceTypes?: Maybe<PriceTypeEntityResponseCollection>;
  prices?: Maybe<PriceEntityResponseCollection>;
  room?: Maybe<RoomEntityResponse>;
  rooms?: Maybe<RoomEntityResponseCollection>;
  training?: Maybe<TrainingEntityResponse>;
  trainingType?: Maybe<TrainingTypeEntityResponse>;
  trainingTypes?: Maybe<TrainingTypeEntityResponseCollection>;
  trainings?: Maybe<TrainingEntityResponseCollection>;
  translation?: Maybe<TranslationEntityResponse>;
  translations?: Maybe<TranslationEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCoachArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCoachesArgs = {
  filters?: InputMaybe<CoachFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPriceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPriceTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPriceTypesArgs = {
  filters?: InputMaybe<PriceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPricesArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRoomArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRoomsArgs = {
  filters?: InputMaybe<RoomFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTrainingArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTrainingTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTrainingTypesArgs = {
  filters?: InputMaybe<TrainingTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTrainingsArgs = {
  filters?: InputMaybe<TrainingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTranslationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTranslationsArgs = {
  filters?: InputMaybe<TranslationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Room = {
  __typename?: 'Room';
  CardColorCss?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Photos?: Maybe<UploadFileRelationResponseCollection>;
  TimetableColorCss?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RoomPhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RoomEntity = {
  __typename?: 'RoomEntity';
  attributes?: Maybe<Room>;
  id?: Maybe<Scalars['ID']>;
};

export type RoomEntityResponse = {
  __typename?: 'RoomEntityResponse';
  data?: Maybe<RoomEntity>;
};

export type RoomEntityResponseCollection = {
  __typename?: 'RoomEntityResponseCollection';
  data: Array<RoomEntity>;
  meta: ResponseCollectionMeta;
};

export type RoomFiltersInput = {
  CardColorCss?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  TimetableColorCss?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RoomFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RoomFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RoomFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RoomInput = {
  CardColorCss?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  TimetableColorCss?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type Training = {
  __typename?: 'Training';
  BottomText?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Length?: Maybe<Scalars['String']>;
  Media?: Maybe<UploadFileRelationResponseCollection>;
  Subtitle?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['Time']>;
  Title?: Maybe<Scalars['String']>;
  coach?: Maybe<CoachEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  days?: Maybe<DayRelationResponseCollection>;
  room?: Maybe<RoomEntityResponse>;
  training_types?: Maybe<TrainingTypeRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TrainingMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TrainingDaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TrainingTraining_TypesArgs = {
  filters?: InputMaybe<TrainingTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TrainingEntity = {
  __typename?: 'TrainingEntity';
  attributes?: Maybe<Training>;
  id?: Maybe<Scalars['ID']>;
};

export type TrainingEntityResponse = {
  __typename?: 'TrainingEntityResponse';
  data?: Maybe<TrainingEntity>;
};

export type TrainingEntityResponseCollection = {
  __typename?: 'TrainingEntityResponseCollection';
  data: Array<TrainingEntity>;
  meta: ResponseCollectionMeta;
};

export type TrainingFiltersInput = {
  BottomText?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Length?: InputMaybe<StringFilterInput>;
  Subtitle?: InputMaybe<StringFilterInput>;
  Time?: InputMaybe<TimeFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TrainingFiltersInput>>>;
  coach?: InputMaybe<CoachFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  days?: InputMaybe<DayFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TrainingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TrainingFiltersInput>>>;
  room?: InputMaybe<RoomFiltersInput>;
  training_types?: InputMaybe<TrainingTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TrainingInput = {
  BottomText?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  Length?: InputMaybe<Scalars['String']>;
  Media?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Subtitle?: InputMaybe<Scalars['String']>;
  Time?: InputMaybe<Scalars['Time']>;
  Title?: InputMaybe<Scalars['String']>;
  coach?: InputMaybe<Scalars['ID']>;
  days?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  room?: InputMaybe<Scalars['ID']>;
  training_types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TrainingType = {
  __typename?: 'TrainingType';
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TrainingTypeEntity = {
  __typename?: 'TrainingTypeEntity';
  attributes?: Maybe<TrainingType>;
  id?: Maybe<Scalars['ID']>;
};

export type TrainingTypeEntityResponse = {
  __typename?: 'TrainingTypeEntityResponse';
  data?: Maybe<TrainingTypeEntity>;
};

export type TrainingTypeEntityResponseCollection = {
  __typename?: 'TrainingTypeEntityResponseCollection';
  data: Array<TrainingTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type TrainingTypeFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TrainingTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TrainingTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TrainingTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TrainingTypeInput = {
  Name?: InputMaybe<Scalars['String']>;
};

export type TrainingTypeRelationResponseCollection = {
  __typename?: 'TrainingTypeRelationResponseCollection';
  data: Array<TrainingTypeEntity>;
};

export type Translation = {
  __typename?: 'Translation';
  EN?: Maybe<Scalars['String']>;
  Key?: Maybe<Scalars['String']>;
  RU?: Maybe<Scalars['String']>;
  UA?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TranslationEntity = {
  __typename?: 'TranslationEntity';
  attributes?: Maybe<Translation>;
  id?: Maybe<Scalars['ID']>;
};

export type TranslationEntityResponse = {
  __typename?: 'TranslationEntityResponse';
  data?: Maybe<TranslationEntity>;
};

export type TranslationEntityResponseCollection = {
  __typename?: 'TranslationEntityResponseCollection';
  data: Array<TranslationEntity>;
  meta: ResponseCollectionMeta;
};

export type TranslationFiltersInput = {
  EN?: InputMaybe<StringFilterInput>;
  Key?: InputMaybe<StringFilterInput>;
  RU?: InputMaybe<StringFilterInput>;
  UA?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TranslationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TranslationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TranslationFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TranslationInput = {
  EN?: InputMaybe<Scalars['String']>;
  Key?: InputMaybe<Scalars['String']>;
  RU?: InputMaybe<Scalars['String']>;
  UA?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
