import React from "react";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PaginatedTrips() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("");
  const { data } = useQuery(
    ["trips", page, search],
    async () =>
      await fetch(
        `http://localhost:8080/trips?name=${search}&page=${page}`
      ).then((results) => results.json()),
    {
      keepPreviousData: true,
    }
  );

  function handleTextFieldChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) {
    setSearchField(e.target.value);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            size="small"
            variant="outlined"
            color="primary"
            sx={{
              mr: 2,
              minWidth: { xs: 250, sm: 250, md: 450 },
              background: "#ffffff",
              border: 1,
            }}
            value={searchField}
            // @ts-ignore
            onChange={handleTextFieldChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setSearch(searchField)}
          >
            Search
          </Button>
        </div>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
          border: { xs: 0, sm: 1 },
          borderRadius: 2,
        }}
      >
        <Table sx={{ tableLayout: "fixed" }}>
          <TableHead
            sx={{ border: 1, boxShadowBottom: 20, backgroundColor: "#BAFF39" }}
          >
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  boxShadowBottom: 20,
                  backgroundColor: "#6E6E6E",
                  color: "#BAFF39",
                }}
              >
                Departure Station
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  boxShadowBottom: 20,
                  backgroundColor: "#6E6E6E",
                  color: "#BAFF39",
                }}
              >
                Return Station
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  boxShadowBottom: 20,
                  backgroundColor: "#6E6E6E",
                  color: "#BAFF39",
                }}
              >
                Duration
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  boxShadowBottom: 20,
                  backgroundColor: "#6E6E6E",
                  color: "#BAFF39",
                }}
              >
                Distance
              </TableCell>
            </TableRow>
          </TableHead>
          {data?.total > 0 ? (
            <TableBody sx={{ backgroundColor: "#ded9d9" }}>
              {data?.data?.map((trip: any) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={trip.departurestationID}
                  sx={{ boxShadowBottom: 10 }}
                >
                  <TableCell
                    align="center"
                    size="small"
                    sx={{ fontSize: { xs: 10, sm: 16 }, color: "#00000" }}
                  >
                    <Link
                      href={"/stations/" + trip.departurestationID}
                      color="secondary"
                      underline="none"
                    >
                      {trip.departurestation}
                    </Link>
                  </TableCell>
                  <TableCell
                    align="center"
                    size="small"
                    sx={{ fontSize: { xs: 10, sm: 16 }, color: "#00000" }}
                  >
                    {" "}
                    <Link
                      href={"/stations/" + trip.returnstationID}
                      color="secondary"
                      underline="none"
                    >
                      {trip.returnstation}
                    </Link>
                  </TableCell>
                  <TableCell
                    align="center"
                    size="small"
                    sx={{ fontSize: { xs: 10, sm: 16 }, color: "#00000" }}
                  >
                    {Math.round(trip.duration / 60)} min
                  </TableCell>
                  <TableCell
                    align="center"
                    size="small"
                    sx={{ fontSize: { xs: 10, sm: 16 }, color: "#00000" }}
                  >
                    {trip.distance} m
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
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
              <Typography variant="h6">{`No stations with name: ${search}`}</Typography>
            </Box>
          )}
        </Table>
      </TableContainer>
      <Pagination
        count={data?.lastpage}
        color="primary"
        className="pagination"
        page={page}
        // @ts-ignore
        onChange={handlePaginationChange}
        size="medium"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          mb: 10,
          color: "#000000",
        }}
        shape="rounded"
      />
    </React.Fragment>
  );
}
