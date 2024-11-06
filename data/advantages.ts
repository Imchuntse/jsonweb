import automaticCrud from './images/automaticCrud.png'
import dataGraphing from './images/dataGraphing.png'
import dataModeling from './images/dataModeling.png'
import dataPipeline from './images/dataPipeline.png'
import dataValidation from './images/dataValidation.png'
import flexibility from './images/flexibility.png'
import optionalOrm from './images/optionalOrm.png'

export interface IAdvantage {
    title: string
    image: string
    desc: string
    code: string
}

const advantages: IAdvantage[] = [
    {
        'title': 'Data Modeling',
        'image': dataModeling.src,
        'desc': 'Declaring data models naturally with Python type hint.',
        'code': `@jsonclass
class User:
    id: int
    name: str = 'John Doe'
    created_at: datetime | None
    friends: list[int]
`
    },
    {
        'title': 'Data Validation & Transformation',
        'image': dataValidation.src,
        'desc': 'Convenient data validation and transformation without adding even a line.',
        'code': `@jsonclass
class Article:
    id: int
    title: str = types.str.trim.required
    content: str = types.str.maxlength(10000).required
    created_at: datetime | None
`
    },
    {
        'title': 'Data Graphing',
        'image': dataGraphing.src,
        'desc': 'Data models can be linked with each other.',
        'code': `@jsonclass
class Song:
    id: int
    name: str
    artists: list[Artist] = types.listof('Artist').linkto
    created_at: datetime | None
`
    },
    {
        'title': 'Data Pipeline',
        'image': dataPipeline.src,
        'desc': 'Expressive data modifier pipeline.',
        'code': `@jsonclass
class User:
    id: int = types.int.primary.required
    email: str = types.str.email.unique.required
    password: str = types.writeonly.str.securepw.length(8, 16).salt.required
    created_at: datetime = types.readonly.datetime.tscreated.required
`
    },
    {
        'title': 'Optional ORM',
        'image': optionalOrm.src,
        'desc': 'Simply decorated ORM with full ORM feature set.',
        'code': `@pymongo
@jsonclass
class Product:
    id: str = types.readonly.str.primary.mongoid.required
    name: str
    detail: str
    stock: int = types.int.min(0).required
    created_at: datetime = types.readonly.datetime.tscreated.required
    updated_at: datetime = types.readonly.datetime.tsupdated.required
`
    },
    {
        'title': 'Automatic CRUD',
        'image': automaticCrud.src,
        'desc': 'No route settings, no glues and hooks.',
        'code': `@api
@pymongo
@jsonclass
class Entry:
    id: str = types.readonly.str.primary.mongoid.required
    text: str
`
    },
    {
        'title': 'Flexibility',
        'image': flexibility.src,
        'desc': 'Alternable database and HTTP library.',
        'code': `@sql <=> @pymongo # sql is not supported yet
create_flask_server() <=> create_fastapi_server()`
    }
]

export default advantages
