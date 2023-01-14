import gql from 'graphql-tag';

export const login_gql=gql`

mutation login($username:String!,$password:String!){
    login(username:$username, password:$password){
        __typename
    }
}

`