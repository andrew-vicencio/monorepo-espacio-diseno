'use client';

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import clsx from "clsx";
import type { Job } from '@/data/types';

interface ICareerTable extends React.HTMLAttributes<HTMLDivElement> { data: Job[] }

const CareerTable = ({ data=[] }: ICareerTable) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="text-2xl">
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map(({ _id, title, url, department}) => (
              <TableRow key={_id} className="">
                <TableCell>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "text-espacio-green underline hover:text-espacio-green/75 visited:text-green-800",
                      "text-lg"
                    )}
                    href={url}
                  >
                    {title}
                    </a>
                </TableCell>
                <TableCell>
                  {department}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </>
  )
}

export default CareerTable;