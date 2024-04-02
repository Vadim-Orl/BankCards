export interface CardItem {
    company: Company;
    customerMarkParameters: CustomerMarkParameters;
    mobileAppDashboard: MobileAppDashboard;
}

export interface Company {
    companyId: string;
}

export interface CustomerMarkParameters {
    loyaltyLevel: LoyaltyLevel;
    mark: number;
}

export interface LoyaltyLevel {
    number: number;
    name: string;
    requiredSum: number;
    markToCash: number;
    cashToMark: number;
}

export interface MobileAppDashboard {
    companyName: string;
    logo: string;
    backgroundColor: string;
    mainColor: string;
    cardBackgroundColor: string;
    textColor: string;
    highlightTextColor: string;
    accentColor: string;
}
