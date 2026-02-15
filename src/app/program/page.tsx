"use client";

import NavButtons from "@/components/ui/nav-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import liftsData from "@/src/data/lifts.json";
import { useState } from "react";

export default function Program() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center p-6">
        <NavButtons active={1} />
      </div>
      <ProgramTable />
    </div>
  );
}

function ProgramTable() {
  const [rows, setRows] = useState<{ id: number; type: number }[]>([]);

  const addRow = (type: number) => {
    setRows([...rows, { id: Date.now(), type }]);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Workout</TableHead>
            <TableHead>Variation</TableHead>
            <TableHead>RPE</TableHead>
            <TableHead>Reps</TableHead>
            <TableHead>Sets</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(
            (row) =>
              row.type === 1 && (
                <ProgramRow
                  key={row.id}
                  type={row.type}
                  onDelete={() => deleteRow(row.id)}
                />
              ),
          )}
          <TableRow>
            <TableCell colSpan={6}>
              <Button className="w-full" onClick={() => addRow(1)}>
                Add SBD Row
              </Button>
            </TableCell>
          </TableRow>
          {rows.map(
            (row) =>
              row.type === 2 && (
                <ProgramRow
                  key={row.id}
                  type={row.type}
                  onDelete={() => deleteRow(row.id)}
                />
              ),
          )}
          <TableRow>
            <TableCell colSpan={6}>
              <Button className="w-full" onClick={() => addRow(2)}>
                Add Accessory Row
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-center items-center p-6">
        <Button onClick={() => console.log(rows)}>Save Program</Button>
      </div>
    </>
  );
}

function ProgramRow({
  type,
  onDelete,
}: {
  type: number;
  onDelete: () => void;
}) {
  const [workout, setWorkout] = useState("");
  const [variation, setVariation] = useState("");
  // ... rest of component
  let lifts: string[] = [];
  if (type === 1) {
    // @ts-ignore
    lifts = Object.keys(liftsData.Main) || [];
  } else if (type === 2) {
    // @ts-ignore
    lifts = Object.keys(liftsData.Accessory) || [];
  }

  let variations: string[] = [];
  if (type === 1 && workout) {
    // @ts-ignore
    variations = liftsData.Main[workout] || [];
  } else if (type === 2 && workout) {
    // @ts-ignore
    variations = liftsData.Accessory[workout] || [];
  }
  return (
    <TableRow>
      <TableCell>
        <Select onValueChange={setWorkout} value={workout}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a Workout" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {lifts.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>
        <Select onValueChange={setVariation} value={variation}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a Variation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {variations.map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>
        <Input placeholder="RPE" />
      </TableCell>
      <TableCell>
        <Input placeholder="Reps" />
      </TableCell>
      <TableCell>
        <Input placeholder="Sets" />
      </TableCell>
      <TableCell>
        <Button onClick={onDelete}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}
