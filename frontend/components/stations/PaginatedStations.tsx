import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function PaginatedStations() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data } = useQuery(
    ["stations", page, search],
    async () =>
      await fetch(
        `http://localhost:8080/stations?name=${search}&page=${page}`
      ).then((results) => results.json()),
    {
      keepPreviousData: true,
    }
  );

  function handleTextFieldChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) {
    setSearch(e.target.value);
  }

  function handlePaginationChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) {
    setPage(value);
    router.push(`?page=${value}`, undefined, { shallow: true });
  }

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
    if (router.query.name) {
      setSearch(router.query.search as string);
    }
  }, [router.query.page, router.query.search]);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 5,
          mt: 2,
          maxWidth: 500,
          ml: 50,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          size="small"
          variant="outlined"
          color="primary"
          // @ts-ignore
          onChange={handleTextFieldChange}
          value={search}
          sx={{ width: "90%", background: "#ffffff", border: 1 }}
        />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 320, mt: 2, ml: 10, mb: 5 }}>
        {data?.total > 0 ? (
          <List>
            {data?.data?.map((station: any) => (
              <ListItem key={station.fid} component="div" disablePadding>
                <ListItemButton href={"/stations/" + station.id}>
                  <ListItemText
                    primary={`${station.nimi}, ${station.kaupunki}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
              mb: 5,
            }}
          >
            <Typography variant="h4">Station not found!</Typography>
          </Box>
        )}
        <Pagination
          count={data?.lastpage}
          color="primary"
          className="pagination"
          page={page}
          // @ts-ignore
          onChange={handlePaginationChange}
          size="small"
        />
      </Box>
    </React.Fragment>
  );
}
