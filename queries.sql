SELECT *
FROM tbl_busstop
WHERE busstop_code LIKE '9-%'
ORDER BY busstop_id

SELECT E.edge_id, B.busstop_name From_Halte, B2.busstop_name To_Halte, E.Corridor_Id
FROM tbl_edge E
INNER JOIN tbl_busstop B
	ON B.busstop_id = E.from_busstop_id
INNER JOIN tbl_busstop B2
	ON B2.busstop_id = E.to_busstop_id
WHERE E.corridor_id = 4
ORDER BY b.busstop_id

DELETE FROM tbl_edge
WHERE edge_id >= 226 
	AND edge_id <= 268
	AND corridor_id = 5
	
INSERT INTO tbl_busstop (BusStop_Code, BusStop_Name)
VALUES

-- penambahan satu arah
SET @start_id = ;
SET @end_id = ;
INSERT INTO tbl_edge (from_busstop_id, To_BusStop_ID, Corridor_ID, Edge_Weight)
SELECT *
FROM (
	SELECT a.busstop_id from_id, b.busstop_id to_id, substr(a.busstop_code, 1) - '0', 8
	FROM tbl_busstop a
	INNER JOIN tbl_busstop b
		ON b.busstop_id - a.busstop_id = 1
	WHERE a.busstop_id >= @start_id
		AND a.busstop_id < @end_id
) TMP