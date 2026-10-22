/**
 * Search vocabulary grouped by directory tag.
 *
 * Each value is a comma-separated list of terms that visitors might type. A
 * successful term match selects the tag, and every location carrying that tag
 * becomes visible. Template strings keep these long lists readable in source.
 */
const tagVocabulary = {
  "Emergency&Critical Care": `
    Emergency, Emergency Services, Urgent Medical Attention, Emergency Medicine,
    Critical Care, Acute Care, Emergency Treatment, Emergency Department, ED, ER,
    Emergency Room, A&E, Accident and Emergency, Hospital Emergency, Emergency Care,
    Emergency Unit, Intensive Care Unit, ICU, Intensive Care, Critical Care Unit,
    Critical Care Ward, Intensive Care Ward, ICU Ward, Critical Care Department,
    Intensive Care Department
  `,
  "Clinics&Surgery": `
    Clinic, Clinics, Outpatient Services, Outpatient Department, Specialist,
    Specialist Appointment, Consultation, Surgical Services, Surgery, Medical Clinic,
    Treatment Clinic, Ambulatory Care, Same Day Surgery, Day Surgery, Day Procedure,
    Day Operation, Outpatient Surgery, Ambulatory Surgery, Surgical Day Unit, SDS,
    Same-Day Procedure, Surgical Specialty Clinic, Surgical Clinic, Surgery Clinic,
    Specialist Surgery, Surgical Consultation, Surgical Outpatient Clinic,
    Surgeon Appointment, Kids Care Short Stay Clinic, Children's Clinic,
    Pediatric Clinic, Paediatric Clinic, Kids Care, Children's Short Stay,
    Pediatric Short Stay, Paediatric Short Stay, Children's Care,
    Fracture / Medicine Clinic, Fracture Clinic, Broken Bone Clinic, Orthopedic Clinic,
    Orthopaedic Clinic, Fracture Care, Bone Clinic, Fracture Follow-Up
  `,
  "Diagnostics&Testing": `
    Diagnostic, Diagnostic Services, Tests, Testing, Medical Tests, Medical Imaging,
    Scans, Screening, Examinations, Investigation, Diagnostic Procedures, Laboratory,
    Lab, Bloodwork, Blood Work, Blood Test, Blood Collection, Blood Draw,
    Specimen Collection, Sample Collection, Phlebotomy, Lab Testing, Diagnostic Imaging,
    Radiology, Imaging, Diagnostic Scan, Scan, Imaging Department, Radiology Department,
    Cardiac Diagnostic Heart Testing, Cardiac Testing, Heart Diagnostics,
    Cardiology Testing, Heart Examination, ECG, EKG, Electrocardiogram, Heart Monitor,
    Echocardiogram, EEG & EMG Clinic, EEG, EMG, Electroencephalogram, Electromyography,
    Brain Wave Test, Brainwave Test, Muscle Test, Nerve Test, Neurological Testing,
    Nerve Conduction Study, CT, CT Scan, CAT Scan, Computed Tomography,
    Computerized Tomography, CT Imaging, CT Scanner, MRI, MRI Scan,
    Magnetic Resonance Imaging, Magnetic Resonance, MR Scan, MRI Scanner, Mammography,
    Mammogram, Breast Imaging, Breast X-ray, Breast Screening, Mammography Scan, Xray,
    X Ray, Radiograph, Radiography, X-ray Imaging, X-ray Department
  `,
  "Patient_Services&Administration": `
    Patient Services, Administration, Administrative Services, Hospital Administration,
    Front Desk, Reception, Patient Assistance, Hospital Assistance, Patient Registration,
    Registration, Register, Check-In, Check In, Patient Check-In, Registration Desk,
    Patient Intake, Admissions Desk, Pre-Admissions, Preadmission, Pre Admission,
    Pre-Admission, Pre-Registration, Preregistration, Pre-Surgical Registration,
    Preoperative Admission, Pre-Op Registration, Information, Information Desk,
    Info Desk, Help Desk, Directions, Assistance, Hospital Information, Enquiries,
    Inquiries, Visitor Information, Main Desk, SHN Foundation Office, Foundation,
    SHN Foundation, Scarborough Health Network Foundation, Donations, Fundraising,
    Charitable Giving, Donor Services, Charity Office, Volunteer Office, Volunteering,
    Volunteer Services, Volunteers, Volunteer Department, Volunteer Coordination,
    Volunteer Registration, Volunteer Recruitment, Volunteer Support
  `,
  "Amenities&Support": `
    General category synonyms, Amenities, Conveniences, Visitor Services,
    Visitor Amenities, Comfort, Shops, Retail, Food Services, Patient Comfort,
    Visitor Support, Pharmacy, Drugstore, Drug Store, Pharmacist, Medication, Medicine,
    Prescriptions, Prescription Pickup, Prescription Pick-Up, Medication Pickup,
    Medication Collection, Pharmacy Services, Gift Shop, Gift Store, Hospital Gift Shop,
    Gifts, Shop, Store, Souvenirs, Presents, Food, Dining, Eat, Eating, Cafeteria, Cafe,
    Café, Restaurant, Food Court, Snacks, Meals, Lunch, Breakfast, Dinner, Refreshments,
    Coffee, Beverages, Drinks, Takeout, Tim Hortons, Tim Horton's, Tim's, Tims,
    Coffee Shop, Donuts, Doughnuts, Subway, Subway Restaurant, Subway Sandwiches,
    Sandwich Shop, Sandwiches, Subs, Fast Food, Waiting Area, Waiting Room, Waiting,
    Seating, Sitting Area, Patient Waiting, Visitor Waiting, Waiting Lounge, Lounge,
    Chairs, Worship Room, Prayer Room, Meditation Room, Quiet Room, Reflection Room,
    Worship Space, Religious Room, Spiritual Room, Chapel, Spiritual & Religious Care,
    Spiritual Care, Religious Care, Chaplain, Chaplaincy, Pastoral Care, Faith Support,
    Religious Support, Spiritual Support, Prayer Support
  `,
  "Hygiene_Facilities": `
    Hygiene, Hygiene Facilities, Sanitation, Sanitary Facilities, Restrooms, Toilets,
    Personal Care, Washroom Facilities, Washrooms, Bathroom, Bathrooms, Restroom,
    Toilet, Washroom, WC, W.C., Lavatory, Loo, Men's Washroom, Women's Washroom,
    Men's Room, Women's Room, Accessible Washrooms, Accessible Bathroom,
    Accessible Toilet, Accessible Restroom, Wheelchair Accessible Washroom,
    Wheelchair Toilet, Barrier-Free Washroom, Disability Accessible Washroom,
    Changeroom, Change Room, Changing Room, Changing Area, Dressing Room, Locker Room,
    Patient Change Room, Patient Changing Area, Changing Facilities, Baby Change,
    Baby Changing, Baby Change Station, Baby Changing Station, Diaper Change,
    Diaper Changing, Changing Table, Infant Changing, Baby Care Station
  `,
  Entrances: `
    Entrance, Entry, Access, Door, Doorway, Hospital Entry, Hospital Access,
    Building Entrance, Exit, Building Exit, Entry Point, Access Point, East Entrance,
    East Entry, East Door, East Access, East Side Entrance, Birchmount Road Entrance,
    North Entrance, North Entry, North Door, North Access, North Side Entrance,
    Parking Side Entrance, Emergency Entrance, ER Entrance, ED Entrance,
    Emergency Entry, Emergency Door, Emergency Department Entrance,
    Emergency Room Entrance, Emergency Access
  `,
  Parking: `
    Parking, Car Parking, Car Park, Parking Lot, Vehicle Parking, Parking Area,
    Parking Facilities, Car Lot, Visitor Parking, Public Parking, Guest Parking,
    Patient Parking, Visitor Lot, Public Lot, Hospital Parking,
    Patient and Visitor Parking, Staff Parking, Employee Parking, Personnel Parking,
    Staff Lot, Employee Lot, Staff Vehicle Parking, Parking Office, Parking Services,
    Parking Administration, Parking Assistance, Parking Desk, Parking Information,
    Parking Permits, Parking Support, Parking Payment Station, Pay Station,
    Payment Machine, Parking Machine, Parking Kiosk, Parking Pay Station,
    Parking Ticket Payment, Pay for Parking, Parking Fee, Parking Payment,
    Parking Garage, Garage, Parking Structure, Multi-Level Parking,
    Multistorey Car Park, Covered Parking, Parking Building, Parking Entrance, Exit,
    Parking Entry, Parking Access, Parking Garage Entrance, Parking Lot Entrance,
    Vehicle Entry, Parking Garage Exit, Parking Lot Exit, Vehicle Exit
  `,
  Security: `
    General category synonyms, Security, Hospital Security, Safety, Security Services,
    Security Personnel, Security Guard, Security Department, Protection Services,
    Hospital Safety, Security Office, Security Desk, Security Station, Security Room,
    Security Department Office, Security Reception, Security Services Office,
    Identification & Badges, ID, Identification, ID Card, ID Badge, Staff ID,
    Employee ID, Volunteer ID, Volunteer Badge, Volunteer Card, Staff Badge,
    Identification Badge, Access Badge, Name Badge, Keys & Access, Key, Keys, Keycard,
    Key Card, Access Card, Swipe Card, Security Card, Building Access, Door Access,
    Access Pass, Entry Card, Replacement Badge, Lost Badge, Lost Keycard
  `,

  // The provided master list did not contain an Accessibility section. These terms
  // cover the locations that the supplied directory data explicitly tags this way.
  Accessibility: `
    Accessibility, Accessible, Wheelchair, Wheelchair Access, Mobility,
    Mobility Assistance, Barrier-Free, Barrier Free, Staircase, Stairs, Stairway,
    Elevator, Lift, Accessible Entrance, Accessible Washroom
  `
};

/**
 * Convert search terms to a comparable form.
 *
 * Lowercasing makes matching case-insensitive, while removing every whitespace
 * character means entries such as "car park" and "CarPark" are equivalent.
 */
const normalizeTerm = (value) => value.toLocaleLowerCase().replace(/\s+/g, "");

// Build a reverse lookup of normalized search term -> matching tag(s). A Set is
// used because terms such as "Exit" can legitimately belong to multiple tags.
const termIndex = new Map();

Object.entries(tagVocabulary).forEach(([tag, vocabulary]) => {
  // Include the tag name itself as a valid search term in addition to its words.
  const terms = [tag, ...vocabulary.split(",")];

  terms.forEach((term) => {
    const normalized = normalizeTerm(term.trim());
    if (!normalized) return;

    if (!termIndex.has(normalized)) termIndex.set(normalized, new Set());
    termIndex.get(normalized).add(tag);
  });
});

// Cache the search field, status messages, and all collapsible directory rows.
const searchInput = document.querySelector("#directory-search");
const directoryRows = [...document.querySelectorAll(".directory-row")];
const status = document.querySelector("#directory-status");
const emptyState = document.querySelector("#directory-empty");

/**
 * Filter the directory in response to the current search value.
 *
 * An empty query displays every row. Otherwise, the query must exactly match a
 * normalized vocabulary term. A row remains visible when at least one of its
 * data-tags values belongs to the query's matched tag set.
 */
const updateDirectory = () => {
  const query = normalizeTerm(searchInput.value.trim());
  const matchingTags = query ? termIndex.get(query) : null;
  let visibleCount = 0;

  directoryRows.forEach((row) => {
    const rowTags = row.dataset.tags.split("|");
    const isVisible = !query || Boolean(matchingTags && rowTags.some((tag) => matchingTags.has(tag)));

    row.hidden = !isVisible;

    // Close filtered-out rows so stale expanded content does not remain open
    // when the user later changes or clears the search.
    if (!isVisible) row.open = false;
    if (isVisible) visibleCount += 1;
  });

  // Swap between the results list and its empty-state message.
  emptyState.hidden = visibleCount !== 0;

  // Keep the live status understandable for sighted and screen-reader users.
  if (!query) {
    status.textContent = `Showing all ${directoryRows.length} locations`;
  } else if (visibleCount === 0) {
    status.textContent = "No matching locations";
  } else {
    status.textContent = `Showing ${visibleCount} matching ${visibleCount === 1 ? "location" : "locations"}`;
  }
};

// Filtering runs immediately after every edit to the search field.
searchInput.addEventListener("input", updateDirectory);
