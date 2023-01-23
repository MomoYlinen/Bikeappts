import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useQuery} from 'react-query'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import { Pagination } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function VirtualizedList() {

    const router = useRouter();
    const [page, setPage] = useState(1);
    const { data } = useQuery(
      ["stations",page],
      async () =>
        await fetch(
          `http://localhost:8080/stations?page=${page}`)
          .then((results)=>results.json()),{
            keepPreviousData: true,
          }
  
    );

    function handlePaginationChange(e: React.ChangeEvent<HTMLInputElement>, value:number) {
        setPage(value);
        router.push(`?page=${value}`, undefined, { shallow: true });
      }

    useEffect(() => {
        if (router.query.page) {
          setPage(parseInt(router.query.page));
        }
      }, [router.query.page]);


    return (
        <React.Fragment>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'start', alignItems: 'center',pl:{xs:2,sm:25, md:60, lg:100},mr:5}}>
      <TextField id="outlined-basic" label="Search" size='small' variant="outlined" color='primary' sx={{mr:2, width:'90%', background:'#ffffff',border:1}}/>
      <Button variant="contained" color='primary' size='small'>Search</Button>
      </Box>
        <Box sx={{width: '100%', maxWidth: 320, mt:2,ml:2,mb:5}}>
        <Pagination
        count={data?.lastpage}
        color='primary'
        className='pagination'
        page={page}
        onChange={handlePaginationChange}
        size='small'
      />
            <List>
            {data?.data?.map((station:any) => (
        <ListItem  key={station.fid} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`${station.nimi}, ${station.kaupunki}`} />
        </ListItemButton>
      </ListItem>
      ))}
            </List>
        <Pagination
        count={data?.lastpage}
        color='primary'
        className='pagination'
        page={page}
        onChange={handlePaginationChange}
        size='small'
      />
        </Box>
        </React.Fragment>
      );
    }