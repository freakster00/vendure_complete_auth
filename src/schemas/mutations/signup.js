import gql from 'graphql-tag';

export const signup_gql=gql`

mutation registerCustomerAccount($firstName:String!,$lastName:String!,$title:String!,$email:String!,$phoneNumber:String!,$password:String!){
        registerCustomerAccount(
            input:{
                firstName:$firstName
                lastName:$lastName
                title:$title
                emailAddress:$email
                phoneNumber:$phoneNumber
                password:$password

            }
        ){
            __typename
        }
    }
  
`