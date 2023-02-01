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
            color="secondary"
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
            size="medium"
            variant="outlined"
            color="secondary"
            sx={{
              mr: 2,
              minWidth: { xs: 250, sm: 250, md: 450 },
              background: "#ffffff",
            }}
            value={searchField}
            // @ts-ignore
            onChange={handleTextFieldChange}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#e21f25", color: "#000000" }}
            size="medium"
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
            sx={{ border: 1, boxShadowBottom: 0, backgroundColor: "#fcbc19" }}
          >
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  boxShadowBottom: 20,
                  backgroundColor: "#333",
                  color: "#fcbc19",
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
                  backgroundColor: "#333",
                  color: "#fcbc19",
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
                  backgroundColor: "#333",
                  color: "#fcbc19",
                }}
              >
                Duration
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: { xs: 12, sm: 18 },
                  fontWeight: 700,
                  backgroundColor: "#333",
                  color: "#fcbc19",
                }}
              >
                Distance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#ffffff" }}>
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
                  sx={{
                    fontSize: { xs: 10, sm: 16 },
                    color: "#00000",
                  }}
                >
                  <Link
                    href={"/stations/" + trip.departurestationID}
                    color="#333"
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
                    color="#333"
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
        </Table>
      </TableContainer>
      <Pagination
        count={data?.lastpage}
        className="pagination"
        page={page}
        // @ts-ignore
        onChange={handlePaginationChange}
        size="medium"
        color="secondary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          mb: 10,
        }}
      />
    </React.Fragment>
  );
}
