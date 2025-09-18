import React, { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface CalculationResults {
  traditional: {
    annualRentIncome: number;
    relettingFees: number;
    maintenanceCosts: number;
    managementFees: number;
    totalNet: number;
  };
  hostworthy: {
    annualRentIncome: number;
    relettingFees: number;
    maintenanceCosts: number;
    managementFees: number;
    bonusValue: number;
    totalNet: number;
  };
  difference: number;
}

const PropertyEarningsCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState<number>(3000);
  const [tenantChanges, setTenantChanges] = useState<number>(1);
  const [annualMaintenance, setAnnualMaintenance] = useState<number>(800);
  const [vacancyWeeks, setVacancyWeeks] = useState<number>(2);

  const calculateResults = useCallback((): CalculationResults => {
    const weeklyRent = monthlyRent * 12 / 52;
    const vacancyLoss = vacancyWeeks * weeklyRent;
    
    // Traditional lease calculations
    const traditionalAnnualRent = (monthlyRent * 12) - vacancyLoss;
    const traditionalRelettingFees = tenantChanges * (monthlyRent * 2); // 2 weeks rent per change
    const traditionalMaintenanceCosts = annualMaintenance;
    const traditionalManagementFees = (monthlyRent * 12) * 0.08; // 8% management fees
    const traditionalNet = traditionalAnnualRent - traditionalRelettingFees - traditionalMaintenanceCosts - traditionalManagementFees;

    // Hostworthy calculations
    const hostworthyAnnualRent = monthlyRent * 12; // Guaranteed rent
    const hostworthyRelettingFees = 0;
    const hostworthyMaintenanceCosts = 0; // We cover under $250
    const hostworthyManagementFees = 0;
    const bonusValue = 1000; // Welcome bonus
    const hostworthyNet = hostworthyAnnualRent - hostworthyRelettingFees - hostworthyMaintenanceCosts - hostworthyManagementFees + bonusValue;

    const difference = hostworthyNet - traditionalNet;

    return {
      traditional: {
        annualRentIncome: traditionalAnnualRent,
        relettingFees: traditionalRelettingFees,
        maintenanceCosts: traditionalMaintenanceCosts,
        managementFees: traditionalManagementFees,
        totalNet: traditionalNet
      },
      hostworthy: {
        annualRentIncome: hostworthyAnnualRent,
        relettingFees: hostworthyRelettingFees,
        maintenanceCosts: hostworthyMaintenanceCosts,
        managementFees: hostworthyManagementFees,
        bonusValue: bonusValue,
        totalNet: hostworthyNet
      },
      difference: difference
    };
  }, [monthlyRent, tenantChanges, annualMaintenance, vacancyWeeks]);

  const results = calculateResults();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="section bg-gradient-to-br from-background to-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              See How Much More You Could Earn
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enter your property details below to see your potential additional earnings with Hostworthy
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Form */}
            <Card className="p-6 h-fit">
              <CardContent className="space-y-6 p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Your Property Details</h3>
                  <p className="text-sm text-muted-foreground">Adjust the values to see your personalized comparison</p>
                </div>

                {/* Monthly Rent */}
                <div className="space-y-2">
                  <Label htmlFor="monthly-rent" className="text-sm font-medium">
                    Monthly Market Rent
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="monthly-rent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(Number(e.target.value))}
                      className="pl-8"
                      min="0"
                      step="100"
                    />
                  </div>
                </div>

                {/* Tenant Changes */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Tenant Changes per Year</Label>
                    <span className="text-sm font-semibold text-primary">{tenantChanges}</span>
                  </div>
                  <Slider
                    value={[tenantChanges]}
                    onValueChange={(value) => setTenantChanges(value[0])}
                    max={5}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0</span>
                    <span>5+</span>
                  </div>
                </div>

                {/* Annual Maintenance */}
                <div className="space-y-2">
                  <Label htmlFor="annual-maintenance" className="text-sm font-medium">
                    Annual Maintenance Costs
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="annual-maintenance"
                      type="number"
                      value={annualMaintenance}
                      onChange={(e) => setAnnualMaintenance(Number(e.target.value))}
                      className="pl-8"
                      min="0"
                      step="100"
                    />
                  </div>
                </div>

                {/* Vacancy Weeks */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Vacancy Weeks per Year</Label>
                    <span className="text-sm font-semibold text-primary">{vacancyWeeks}</span>
                  </div>
                  <Slider
                    value={[vacancyWeeks]}
                    onValueChange={(value) => setVacancyWeeks(value[0])}
                    max={8}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0 weeks</span>
                    <span>8+ weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Summary */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-trust/5 border-primary/20">
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Your Potential Additional Earnings</h3>
                  <div className="text-4xl font-bold text-trust mb-2">
                    {formatCurrency(results.difference)}
                  </div>
                  <p className="text-sm text-muted-foreground">more per year with Hostworthy</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Traditional Lease</div>
                    <div className="text-lg font-semibold text-foreground">
                      {formatCurrency(results.traditional.totalNet)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Hostworthy Lease</div>
                    <div className="text-lg font-semibold text-trust">
                      {formatCurrency(results.hostworthy.totalNet)}
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Guaranteed rent (no vacancy)</span>
                    <span className="text-trust font-medium">✓</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">No reletting fees</span>
                    <span className="text-trust font-medium">✓</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">No management fees</span>
                    <span className="text-trust font-medium">✓</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Maintenance covered</span>
                    <span className="text-trust font-medium">✓</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Welcome bonus</span>
                    <span className="text-trust font-medium">{formatCurrency(results.hostworthy.bonusValue)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="bg-primary/5 p-4 border-b">
                <h3 className="text-lg font-semibold text-primary flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Detailed Financial Comparison
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold text-primary">Metric</TableHead>
                      <TableHead className="font-semibold text-primary">Traditional Lease</TableHead>
                      <TableHead className="font-semibold text-primary">Hostworthy Lease</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Annual Rent Income</TableCell>
                      <TableCell>{formatCurrency(results.traditional.annualRentIncome)}</TableCell>
                      <TableCell className="text-trust font-medium">{formatCurrency(results.hostworthy.annualRentIncome)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Reletting Fees</TableCell>
                      <TableCell className="text-destructive">-{formatCurrency(results.traditional.relettingFees)}</TableCell>
                      <TableCell className="text-trust font-medium">{formatCurrency(results.hostworthy.relettingFees)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Maintenance Costs</TableCell>
                      <TableCell className="text-destructive">-{formatCurrency(results.traditional.maintenanceCosts)}</TableCell>
                      <TableCell className="text-trust font-medium">{formatCurrency(results.hostworthy.maintenanceCosts)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Management Fees (8%)</TableCell>
                      <TableCell className="text-destructive">-{formatCurrency(results.traditional.managementFees)}</TableCell>
                      <TableCell className="text-trust font-medium">{formatCurrency(results.hostworthy.managementFees)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Welcome Bonus</TableCell>
                      <TableCell>—</TableCell>
                      <TableCell className="text-trust font-medium">+{formatCurrency(results.hostworthy.bonusValue)}</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-primary/20">
                      <TableCell className="font-bold text-primary">Total Net Income</TableCell>
                      <TableCell className="font-bold">{formatCurrency(results.traditional.totalNet)}</TableCell>
                      <TableCell className="font-bold text-trust">{formatCurrency(results.hostworthy.totalNet)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">
                Ready to start earning {formatCurrency(results.difference)} more per year?
              </p>
              <p className="text-sm text-muted-foreground">
                Book a free consultation to get your personalized analysis and welcome bonus details
              </p>
            </div>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/contact">Get Your Custom Analysis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyEarningsCalculator;