"use client";
import axios from 'axios';
import {useEffect, useState} from 'react';

export default async function User(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const data = response.data;
    return(
        <div>
            User Page
            <br/>
            {data.name}
            <br/>
            {data.email}
        </div>
    )
}