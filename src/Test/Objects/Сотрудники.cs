﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "Наименование as \'Наименование\'",
            "ID as \'ID\'",
            "Серия as \'Серия\'",
            "Номер as \'Номер\'"})]
    [View("СотрудникиL", new string[] {
            "Наименование as \'Наименование\'",
            "ID as \'ID\'",
            "Серия as \'Серия\'",
            "Номер as \'Номер\'"})]
    public class Сотрудники : IIS.Test.паспортные
    {
        
        private string fНаименование;
        
        private int fID;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ID CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ID Get start)

                // *** End programmer edit section *** (Сотрудники.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Сотрудники.ID Get end)

                // *** End programmer edit section *** (Сотрудники.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ID Set start)

                // *** End programmer edit section *** (Сотрудники.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Сотрудники.ID Set end)

                // *** End programmer edit section *** (Сотрудники.ID Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Наименование CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Наименование Get start)

                // *** End programmer edit section *** (Сотрудники.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Сотрудники.Наименование Get end)

                // *** End programmer edit section *** (Сотрудники.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Наименование Set start)

                // *** End programmer edit section *** (Сотрудники.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Сотрудники.Наименование Set end)

                // *** End programmer edit section *** (Сотрудники.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Test.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Test.Сотрудники));
                }
            }
        }
    }
}
