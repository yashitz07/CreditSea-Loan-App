"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const token = Cookies.get("user_token");

export const metadata: Metadata = {
  title: "Loan Request form",
  description: "Request a loan from the Admins",
};

const RequestLoan = () => {
  const router = useRouter();

  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [term, setTerm] = useState<number | "">("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isNaN(Number(loanAmount)) || Number(loanAmount) <= 0) {
      alert("Please enter a valid loan amount.");
      return;
    }

    if (isNaN(Number(term)) || Number(term) <= 0) {
      alert("Please enter a valid loan term.");
      return;
    }

    const requestBody = {
      loanAmount: Number(loanAmount),
      term: Number(term),
    };

    try {
      const response = await fetch(
        "/api/loans/createLoan/" + Cookies.get("userId"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        alert("Loan application successful.");
        router.push("/manage-loans/my-loans");
        setLoanAmount("");
        setTerm("");
      } else {
        setErr("Loan application failed. Please try again.");
      }
    } catch (error) {
      setErr("Loan Application Failed! Please try again later");
    }
  };

  return (
    <>
      <Breadcrumb pageName="Apply for a Loan" />
      <div className="rounded-md border border-stroke bg-white p-8 shadow-md dark:border-strokedark dark:bg-boxdark">
        <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">
          APPLY FOR A LOAN
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Full name as it appears on bank account
                </label>
                <input
                  type="text"
                  placeholder="Full name as it appears on bank account"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Loan tenure (in months)
                </label>
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  placeholder="Loan tenure (in months)"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Reason for loan
                </label>
                <textarea
                  placeholder="Reason for loan"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  rows={3}
                ></textarea>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  How much do you need?
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  placeholder="How much do you need?"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Employment status
                </label>
                <input
                  type="text"
                  placeholder="Employment status"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Employment address
                </label>
                <input
                  type="text"
                  placeholder="Employment address"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Employer contact number
                </label>
                <input
                  type="text"
                  placeholder="Employer contact number"
                  className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-sm outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>
            </div>
          </div>

          {err && (
            <p className="mt-4 text-sm text-meta-1">
              {err}
            </p>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded px-4 py-3 text-white transition hover:bg-opacity-90 bg-success"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RequestLoan;
