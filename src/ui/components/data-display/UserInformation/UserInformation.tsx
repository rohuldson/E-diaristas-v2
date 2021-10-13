import React from 'react';
import  { 
    UserInformationContainer,
     UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled
    } from './UserInformation.style'

    interface  UserInformationProps { 
        picture: string;
        name: string;
        rating: number;
        description?: string;
    }

const UserInformation: React.FC <UserInformationProps> = ({
    picture, name, description, rating

}) => {
    return (
        < UserInformationContainer>
            <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
            <UserName>{name}</UserName>
            <RatingStyled readOnly value={rating}/>
            <UserDescription>{description}</UserDescription>
        </ UserInformationContainer>
    )
}

export default UserInformation;