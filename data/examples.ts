export interface IExample {
    code: string
    title: string
    description: string
    features: string[]
}

const examples: IExample[] = [
    {
        'code': `
@authorized
@api
@pymongo
@jsonclass
class User:
    id: str = types.readonly.str.primary.mongoid.required
    email: Optional[str] = types.str.maxlength(36).trim.unique 
        .presentwithout('phone_number').writenonnull 
        .validate(validate_auth_code_for_email) 
    calling_code: Optional[str] = types.str.maxlength(5).trim 
        .presentwith('phone_number').writenonnull 
        .validate(check_user_calling_code) 
    phone_number: Optional[str] = types.str.maxlength(20).trim.unique 
        .presentwithout('email').writenonnull 
        .validate(check_user_calling_code) 
        .validate(validate_auth_code) 
    password: Optional[str] = types.str.writeonly.writenonnull 
        .minlength(8).maxlength(16) 
        .transform(salt).compare(compare_password) 
    authentication_code: Optional[str] = types.str.temp 
    old_password: Optional[str] = types.str.temp 
    name: Optional[str] = types.str.maxlength(30).trim 
    gender: Optional[Gender] = types.enum(Gender).writeonce 
    created_at: datetime = types.readonly.datetime.tscreated.required
    updated_at: datetime = types.readonly.datetime.tsupdated.required
        `,
        'title': 'Product User',
        'description': `
            User management and session authorization are needed in most of the
            products.
        `,
        'features': [
            `"email": A user can have an email or a phone number, or both. 
When email is set, it can not be set back to null. 
When it's changed, an authentication code verification is triggered in case of changing it without permission.
   `,
            `"calling_code": The calling code is validated against the phone number prefix. 
If phone number is present, it must be present.
    `,
            `"phone_number": Phone number should be presented if email is not present.
A user should sign up with either email or phone number.
    `,
            `"password": The password is not output to the response. 
However, though, it can be accepted. 
It's validated and transformed on receiving. 
It's encrypted stored in the database. 
When it's changed, a password comparing is performed.
   `,
            `"authentication_code": The authentication code is used for authenticates the email updation and phone number updation. 
It will not be saved into the database. It's \"temp\".
   `,
            `"old_password ": The old password is used for comparing with the old encrypted value. 
Only with correct old password, password can be updated.
    `,
            `"name": A user's name is automatically trimed. 
The leading and trailing whitespaces are removed.
    `,
            `"gender": A user's gender can be null at the beginning. 
A user cannot change his/her gender after it's first time set.
    `
        ]
    },
    {
        'code': `
@api
@pymongo
@jsonclass
class Song:
    id: str = types.readonly.str.primary.mongoid.required
    name: str
    singers: list[Singer] = types.listof('Singer').linkto 
    created_at: datetime = types.readonly.datetime.tscreated.required
    updated_at: datetime = types.readonly.datetime.tsupdated.required


@api
@pymongo
@jsonclass
class Singer:
    id: str = types.readonly.str.primary.mongoid.required
    name: str
    songs: list[Song] = types.listof('Song').linkedby('singers') 
    created_at: datetime = types.readonly.datetime.tscreated.required
    updated_at: datetime = types.readonly.datetime.tsupdated.required
        `,
        'title': 'Song & Singer Relationship',
        'description': 'This example demostrates the many to many relationship through local list keys.',
        'features': [
            `A song has multiple singers, 
but not much, usually one or two.
        `,
            `A singer has a lot of songs.
        `,
            `Setup graph relationships are extremely simple in JSONClasses
        `,
            `JSONClasses supports local keys relationship, 
also supports join table.
        `,
            `Queries can be performed with relationships.
        `
        ]
    },
    {
        'code': `
@api
@pymongo
@jsonclass
class Comment:
    id: str = types.readonly.str.primary.mongoid.required
    name: str
    parent: Comment | None = types.objof('Comment').linkto 
    children: list[Comment] = types.listof('Comment').linkedby('parent') 
    created_at: datetime = types.readonly.datetime.tscreated.required
    updated_at: datetime = types.readonly.datetime.tsupdated.required
        `,
        'title': 'Blog Comments',
        'description': 'Comments in blog systems have a tree structure.',
        'features': [
            `Root comments don\'t have a parent. 
While other comments do have a parent.
    `,
            `A comment has 0 or more child comments.
    `,
            `Setup 1 to many relationship is extremely simple in JSONClasses.`
        ]
    }
]

export default examples
